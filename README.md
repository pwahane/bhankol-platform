# bhankol-platform

1. Set up an Elastic Kubernetes Cluster on AWS using [this](eks.yml)
2. Install JupyterHub `helm install jupyterhub jupyterhub/jupyterhub --namespace=bhankol`
3. Install Airflow `helm install --name bhankol-airflow stable/airflow --namespace=bhankol`
4. Install Atlas `helm install --name bhankol-atlas stable/apache-atlas --namespace=bhankol`
5. Install OrientDB `helm install --name bhankol-orientdb orientdb bitnami/orientdb --set persistence.enabled=true,persistence.Size=200Gi --namespace=bhankol`
6. Install Kubeflow `helm install --name bhankol-kubeflow kubeflow/kubeflow --namespace=bhankol`