# Create new config

```
kubectl create cm nginx --from-file=default.conf
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```