import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://Gaurav:P0lfV04v1vpQoME1@clouded-gk.yruxu.mongodb.net/Contact-information?retryWrites=true&w=majority&appName=clouded-gk";
if (!uri) {
  console.error('MONGODB_URI environment variable is not defined');
}

let client = null;
let clientPromise = null;

if (!clientPromise) {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate form data
    const { name, email, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Missing required fields' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Connect to MongoDB
    const client = await clientPromise;
  
    // Access your database and collection
    const database = client.db('Contact-information'); // replace with your DB name
    const collection = database.collection('contacts');
    
    // Insert the document
    const result = await collection.insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date()
    });
    
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully!',
        id: result.insertedId 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error saving contact form:', error.message, error.stack);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Failed to send message' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}