const amqp = require('amqplib');

const connect = async () => {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");

        channel.consume("jobs", message => {
            const messageJson = JSON.parse(message.content.toString());
            console.log(messageJson);
            channel.ack(message)
        })

        console.log("Waiting for jobs...");

    } catch (error) {
        console.log({ error})
    }
}

connect();
