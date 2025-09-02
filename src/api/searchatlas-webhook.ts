// SearchAtlas Webhook Handler
// This file would be deployed as a serverless function on Vercel

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
  },
};

interface SearchAtlasWebhookPayload {
  event: string;
  data: {
    id: string;
    title: string;
    content: string;
    author: string;
    tags: string[];
    publishedAt: string;
    metaDescription?: string;
    featuredImage?: string;
    category?: string;
  };
  metadata?: {
    source: string;
    version: string;
    timestamp: string;
  };
}

// This would be deployed as an API route in Next.js or as a Vercel Function
export default async function handler(req: any, res: any) {
  // Verify webhook is from SearchAtlas
  const signature = req.headers['x-searchatlas-signature'];
  const secret = process.env.SEARCHATLAS_WEBHOOK_SECRET;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Verify webhook signature (implement HMAC verification)
    if (secret && signature) {
      const isValid = verifyWebhookSignature(req.body, signature, secret);
      if (!isValid) {
        return res.status(401).json({ error: 'Invalid signature' });
      }
    }

    const payload: SearchAtlasWebhookPayload = req.body;

    // Process the webhook based on event type
    switch (payload.event) {
      case 'blog.published':
        await handleBlogPublished(payload.data);
        break;
      case 'blog.updated':
        await handleBlogUpdated(payload.data);
        break;
      case 'blog.deleted':
        await handleBlogDeleted(payload.data);
        break;
      default:
        console.log(`Unhandled event type: ${payload.event}`);
    }

    // Return success response
    res.status(200).json({ 
      success: true, 
      message: 'Webhook processed successfully',
      eventId: payload.data.id 
    });
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Helper function to verify webhook signature
function verifyWebhookSignature(payload: any, signature: string, secret: string): boolean {
  // Implement HMAC-SHA256 verification
  // This is a placeholder - implement actual verification
  const crypto = require('crypto');
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
  
  return signature === `sha256=${expectedSignature}`;
}

// Handler functions for different event types
async function handleBlogPublished(data: any) {
  console.log('New blog published:', data.title);
  
  // Store in database
  // You would implement database storage here
  // Example: await saveBlogPost(data);
  
  // Trigger any additional processing
  // Example: await indexForSearch(data);
  // Example: await sendNotification(data);
}

async function handleBlogUpdated(data: any) {
  console.log('Blog updated:', data.title);
  // Update existing blog post in database
  // Example: await updateBlogPost(data.id, data);
}

async function handleBlogDeleted(data: any) {
  console.log('Blog deleted:', data.id);
  // Remove blog post from database
  // Example: await deleteBlogPost(data.id);
}