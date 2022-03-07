const amqp = require('amqplib');

const connect = async () => {
    try {
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();
        const result = await channel.assertQueue("jobs");
        channel.sendToQueue("jobs", Buffer.from(JSON.stringify({ 
            message: "Hollow world", 
            date: new Date().toISOString() 
        })));
        console.log("Job sent to queue");

    } catch (error) {
        console.log({ error})
    }
}
