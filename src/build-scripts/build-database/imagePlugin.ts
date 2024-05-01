import path from 'path';
import visitParents from 'unist-util-visit-parents';
import unistUtilIs from 'unist-util-is';
import { Node } from 'unist';

import config from '../../../config';

const imagePlugin = () => (tree: Node, file: any) => {
  // check that the node is an image element
  const test = (node: Node): node is Node =>
    unistUtilIs(node, { tagName: 'img' });

  visitParents(
    tree,
    test,
    (node: Node, ancestors) => {
      updateImagePath(node as Element, file);
      updateImageWrapper(ancestors[ancestors.length - 1]);
    }
  );
};

type Element = Node & {
  type: 'element';
  tagName: string;
  properties: Record<string, unknown>;
  children: Element[];
};

const updateImagePath = (imageNode: Element, file: any) => {
  const imageSource = imageNode.properties.src as string;
  // FIXME: check image source; only do the following if it's not an absolute url

  const filePath = file.path; // this is the path of the markdown file containing the reference
  const { dir: directoryPath } = path.parse(filePath);

  // image files will be copied to the destination directory preserving the original directory tree
  const directoryRelativeToDocsRoot = path.relative(config.docsPath, directoryPath);
  const destDirectory = `${config.publicPath}/images`; // the public path of the images directory
  const destImagePath = path.join(destDirectory, directoryRelativeToDocsRoot, imageSource);


  imageNode.properties.src = destImagePath;
};

/**
 * Markdown, by default, wraps inline elements in a paragraph tag.
 * For images, this behaviour is undesirable.
 */
const updateImageWrapper = (imageParentNode: Node) => {
  if (imageParentNode.tagName === 'p' && (imageParentNode.children as any[]).length === 1) {
    // i.e. if the image parent is a paragraph with only one child, which is the image
    imageParentNode.tagName = 'div';
  }
}


export default imagePlugin;
