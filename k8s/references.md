Our docs:
- [Deploying new site on WP-k8s Cluster](https://www.ebi.ac.uk/seqdb/confluence/display/ENSWEB/Deploying+new+site+on+WP-k8s+Cluster)

Uniprot docs:
- [Using Gitlab CI, Docker, and Kubernetes to host static content](https://www.ebi.ac.uk/seqdb/confluence/display/UniProt/Using+GitLab+CI%2C+Docker+and+Kuberentes+To+Host+Static+Content)

Summary of steps:
- Create secret for pulling images from the docker registry associated with your gitlab repository:

```
kubehk-sbox -n ensembl-experiments create secret docker-registry <your secret name> --docker-server=dockerhub.ebi.ac.uk --docker-username=<your username> --docker-password=<your gitlab access token> --docker-email=<your email>
````

- create deployment manifest (deployment.yaml)
- create service manifest with type nodeport to get access outside cluster (service.yaml)
- add `.gitlab-ci.yml`, in which, during the deployment step, both manifests will be applied to kubernetes:
  - apply deployment manifest (kubectl --kubecoonfig=<kubeconfig_file> apply -f deployment.yaml)
  - apply service manifest (kubectl --kubecoonfig=<kubeconfig_file> apply -f service.yaml)
- identify the port of the service (from kubectl get svc) and identify host (from kube config file)

Note:
- our experimental cluster: kubehk-sbox
- use ensembl-experiments namespace for experiments

Questions:
- why do some of our gitlab-ci yaml files do have a line applying 
