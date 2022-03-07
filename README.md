### Test project to try out RabbitMQ publisher / consumer concept

Start `RabbitMQ` (AMQP broker) exchange server in docker via:

```
docker run --name rabbitmq -p 5672:5672 rabbitmq
```

Publish a message via:
```
npm run publish
```

Consume messages via:
```
npm run consume
```
