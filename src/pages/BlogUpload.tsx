import React, { useState } from 'react';
import { Upload, Link, FileText, CheckCircle, AlertCircle } from 'lucide-react';

interface BlogPost {
  title: string;
  content: string;
  author: string;
  tags: string[];
  metaDescription: string;
  searchAtlasId?: string;
  publishDate?: string;
}

const BlogUpload: React.FC = () => {
  const [uploadMethod, setUploadMethod] = useState<'api' | 'webhook' | 'manual'>('manual');
  const [blogPost, setBlogPost] = useState<BlogPost>({
    title: '',
    content: '',
    author: '',
    tags: [],
    metaDescription: ''
  });
  const [apiKey, setApiKey] = useState('');
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  // SearchAtlas Webhook URL for your site
  const webhookUrl = `${window.location.origin}/api/searchatlas/webhook`;
  const apiEndpoint = `${window.location.origin}/api/blog/upload`;

  const handleManualUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploadStatus('uploading');
    
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey
        },
        body: JSON.stringify(blogPost)
      });

      if (response.ok) {
        setUploadStatus('success');
        setMessage('Blog post uploaded successfully!');
        // Reset form
        setBlogPost({
          title: '',
          content: '',
          author: '',
          tags: [],
          metaDescription: ''
        });
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      setUploadStatus('error');
      setMessage('Failed to upload blog post. Please try again.');
    }
  };

  const handleTagInput = (value: string) => {
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setBlogPost({ ...blogPost, tags });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setMessage('Copied to clipboard!');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              SearchAtlas Blog Integration
            </h1>
            <p className="text-gray-600">
              Upload and manage blog content from SearchAtlas to your Quotely platform
            </p>
          </div>

          {/* Integration Methods */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Choose Integration Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setUploadMethod('manual')}
                className={`p-4 border rounded-lg transition-all ${
                  uploadMethod === 'manual'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <FileText className="w-8 h-8 mb-2 mx-auto text-primary-500" />
                <h3 className="font-semibold">Manual Upload</h3>
                <p className="text-sm text-gray-600">Copy & paste content</p>
              </button>

              <button
                onClick={() => setUploadMethod('api')}
                className={`p-4 border rounded-lg transition-all ${
                  uploadMethod === 'api'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Upload className="w-8 h-8 mb-2 mx-auto text-primary-500" />
                <h3 className="font-semibold">API Integration</h3>
                <p className="text-sm text-gray-600">Direct API upload</p>
              </button>

              <button
                onClick={() => setUploadMethod('webhook')}
                className={`p-4 border rounded-lg transition-all ${
                  uploadMethod === 'webhook'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <Link className="w-8 h-8 mb-2 mx-auto text-primary-500" />
                <h3 className="font-semibold">Webhook</h3>
                <p className="text-sm text-gray-600">Automatic sync</p>
              </button>
            </div>
          </div>

          {/* Manual Upload Form */}
          {uploadMethod === 'manual' && (
            <form onSubmit={handleManualUpload} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Title
                </label>
                <input
                  type="text"
                  value={blogPost.title}
                  onChange={(e) => setBlogPost({ ...blogPost, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={blogPost.author}
                  onChange={(e) => setBlogPost({ ...blogPost, author: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description
                </label>
                <input
                  type="text"
                  value={blogPost.metaDescription}
                  onChange={(e) => setBlogPost({ ...blogPost, metaDescription: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="SEO description for search engines"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={blogPost.tags.join(', ')}
                  onChange={(e) => handleTagInput(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="insurance, quotes, auto"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Content (HTML or Markdown)
                </label>
                <textarea
                  value={blogPost.content}
                  onChange={(e) => setBlogPost({ ...blogPost, content: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  rows={10}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  API Key (optional for authentication)
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your SearchAtlas API key"
                />
              </div>

              <button
                type="submit"
                disabled={uploadStatus === 'uploading'}
                className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
              >
                {uploadStatus === 'uploading' ? 'Uploading...' : 'Upload Blog Post'}
              </button>
            </form>
          )}

          {/* API Integration Instructions */}
          {uploadMethod === 'api' && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">API Endpoint</h3>
                <div className="bg-white p-3 rounded border border-gray-200 font-mono text-sm mb-3">
                  POST {apiEndpoint}
                </div>
                <button
                  onClick={() => copyToClipboard(apiEndpoint)}
                  className="text-primary-600 hover:text-primary-700 text-sm"
                >
                  Copy Endpoint
                </button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Request Format</h3>
                <pre className="bg-white p-3 rounded border border-gray-200 text-sm overflow-x-auto">
{`{
  "title": "Your Blog Title",
  "content": "HTML or Markdown content",
  "author": "Author Name",
  "tags": ["tag1", "tag2"],
  "metaDescription": "SEO description",
  "searchAtlasId": "optional-id",
  "publishDate": "2024-01-01"
}`}
                </pre>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Headers</h3>
                <pre className="bg-white p-3 rounded border border-gray-200 text-sm">
{`Content-Type: application/json
X-API-Key: your-api-key`}
                </pre>
              </div>
            </div>
          )}

          {/* Webhook Instructions */}
          {uploadMethod === 'webhook' && (
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Webhook URL</h3>
                <div className="bg-white p-3 rounded border border-gray-200 font-mono text-sm mb-3">
                  {webhookUrl}
                </div>
                <button
                  onClick={() => copyToClipboard(webhookUrl)}
                  className="text-primary-600 hover:text-primary-700 text-sm"
                >
                  Copy Webhook URL
                </button>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Setup Instructions</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Log into your SearchAtlas account</li>
                  <li>Navigate to Settings → Integrations</li>
                  <li>Add a new webhook with the URL above</li>
                  <li>Select "Blog Post Published" as the trigger event</li>
                  <li>Save and test the webhook</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Expected Webhook Payload</h3>
                <pre className="bg-white p-3 rounded border border-gray-200 text-sm overflow-x-auto">
{`{
  "event": "blog.published",
  "data": {
    "id": "searchatlas-post-id",
    "title": "Blog Title",
    "content": "Content HTML",
    "author": "Author Name",
    "tags": ["tag1", "tag2"],
    "publishedAt": "2024-01-01T00:00:00Z"
  }
}`}
                </pre>
              </div>
            </div>
          )}

          {/* Status Messages */}
          {message && (
            <div className={`mt-6 p-4 rounded-lg flex items-center ${
              uploadStatus === 'success' ? 'bg-green-50 text-green-800' :
              uploadStatus === 'error' ? 'bg-red-50 text-red-800' :
              'bg-blue-50 text-blue-800'
            }`}>
              {uploadStatus === 'success' ? (
                <CheckCircle className="w-5 h-5 mr-2" />
              ) : uploadStatus === 'error' ? (
                <AlertCircle className="w-5 h-5 mr-2" />
              ) : null}
              {message}
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4">SearchAtlas Integration Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">✅ Automatic SEO Optimization</h3>
              <p className="text-gray-600 text-sm">
                Content from SearchAtlas comes pre-optimized for search engines
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📊 Content Analytics</h3>
              <p className="text-gray-600 text-sm">
                Track performance metrics directly from SearchAtlas
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🔄 Real-time Sync</h3>
              <p className="text-gray-600 text-sm">
                Webhook integration keeps content synchronized automatically
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🎯 Targeted Content</h3>
              <p className="text-gray-600 text-sm">
                Insurance-specific content optimized for your audience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogUpload;