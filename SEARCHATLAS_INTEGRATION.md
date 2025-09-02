# SearchAtlas Blog Integration Guide

## Overview
This integration allows you to seamlessly upload and sync blog content from SearchAtlas to your Quotely platform.

## Integration Methods

### 1. Manual Upload
Access the blog upload interface at: `/blog-upload`

Simply copy and paste your content from SearchAtlas into the form fields.

### 2. API Integration

#### Endpoint
```
POST https://tryquotely.com/api/blog/upload
```

#### Headers
```
Content-Type: application/json
X-API-Key: your-searchatlas-api-key
```

#### Request Body
```json
{
  "title": "Your Blog Title",
  "content": "HTML or Markdown content",
  "author": "Author Name",
  "tags": ["insurance", "quotes", "auto"],
  "metaDescription": "SEO meta description",
  "searchAtlasId": "optional-searchatlas-id",
  "publishDate": "2024-01-01T00:00:00Z"
}
```

#### Response
```json
{
  "success": true,
  "blogId": "generated-blog-id",
  "message": "Blog post uploaded successfully"
}
```

### 3. Webhook Integration

#### Setup Instructions

1. **Get Your Webhook URL**
   ```
   https://tryquotely.com/api/searchatlas/webhook
   ```

2. **Configure in SearchAtlas**
   - Log into SearchAtlas Dashboard
   - Navigate to Settings → Integrations
   - Click "Add Webhook"
   - Enter the webhook URL
   - Select trigger events:
     - Blog Published
     - Blog Updated
     - Blog Deleted
   - Save configuration

3. **Add Webhook Secret** (Optional but recommended)
   - Generate a secret key in SearchAtlas
   - Add to your environment variables:
     ```
     SEARCHATLAS_WEBHOOK_SECRET=your-secret-key
     ```

#### Webhook Events

##### Blog Published
```json
{
  "event": "blog.published",
  "data": {
    "id": "blog-123",
    "title": "Insurance Tips for 2024",
    "content": "<p>HTML content...</p>",
    "author": "John Doe",
    "tags": ["insurance", "tips"],
    "publishedAt": "2024-01-01T00:00:00Z"
  }
}
```

##### Blog Updated
```json
{
  "event": "blog.updated",
  "data": {
    "id": "blog-123",
    "title": "Updated Title",
    "content": "<p>Updated content...</p>",
    "author": "John Doe",
    "tags": ["insurance", "tips", "2024"],
    "publishedAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-02T00:00:00Z"
  }
}
```

##### Blog Deleted
```json
{
  "event": "blog.deleted",
  "data": {
    "id": "blog-123",
    "deletedAt": "2024-01-03T00:00:00Z"
  }
}
```

## Security

### API Key Authentication
- Generate API keys in your SearchAtlas dashboard
- Include in `X-API-Key` header for all API requests
- Keep keys secure and rotate regularly

### Webhook Signature Verification
- All webhooks include `X-SearchAtlas-Signature` header
- Verify using HMAC-SHA256 with your webhook secret
- Reject requests with invalid signatures

## Testing

### Test Manual Upload
1. Navigate to `/blog-upload`
2. Fill in the form with test data
3. Click "Upload Blog Post"
4. Verify success message

### Test API Integration
```bash
curl -X POST https://tryquotely.com/api/blog/upload \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key" \
  -d '{
    "title": "Test Blog Post",
    "content": "This is a test post",
    "author": "Test Author",
    "tags": ["test"],
    "metaDescription": "Test description"
  }'
```

### Test Webhook
Use SearchAtlas webhook testing tool or:
```bash
curl -X POST https://tryquotely.com/api/searchatlas/webhook \
  -H "Content-Type: application/json" \
  -H "X-SearchAtlas-Signature: test-signature" \
  -d '{
    "event": "blog.published",
    "data": {
      "id": "test-123",
      "title": "Test Webhook",
      "content": "Test content",
      "author": "Webhook Test",
      "tags": ["test"],
      "publishedAt": "2024-01-01T00:00:00Z"
    }
  }'
```

## Content Formatting

### Supported Formats
- HTML
- Markdown
- Plain text (will be converted to HTML)

### SEO Best Practices
- Include meta descriptions (150-160 characters)
- Use relevant tags (3-5 per post)
- Add alt text to images
- Include internal links to other Quotely pages

### Image Handling
- Images can be hosted on SearchAtlas CDN
- Or upload to Quotely media library
- Recommended formats: WebP, JPEG, PNG
- Optimize images before uploading (<500KB)

## Troubleshooting

### Common Issues

#### 401 Unauthorized
- Check API key is valid
- Ensure key has proper permissions
- Verify webhook signature if using webhooks

#### 400 Bad Request
- Validate JSON format
- Check required fields are present
- Ensure content length < 10MB

#### 500 Internal Server Error
- Check server logs
- Verify database connection
- Contact support if persists

## Support

For assistance with the SearchAtlas integration:

**Quotely Support**
- Email: support@tryquotely.com
- Phone: (918) 395-6335
- Address: 6010 S. 66th E. Ave, Ste B, Tulsa, OK 74145

**SearchAtlas Support**
- Documentation: https://searchatlas.com/docs
- Support Portal: https://support.searchatlas.com

## Changelog

### Version 1.0.0 (2024)
- Initial integration release
- Manual upload interface
- API endpoint for blog uploads
- Webhook support for automatic sync
- HMAC signature verification
- Support for HTML and Markdown content

---

© 2024 Quotely, Inc. DBA "Try Quotely". All rights reserved.