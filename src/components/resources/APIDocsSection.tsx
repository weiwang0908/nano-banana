'use client'

import { Button } from '@/components/ui/button'
import { Code, Download, BookOpen, ExternalLink, Copy } from 'lucide-react'

const apiEndpoints = [
  {
    method: "POST",
    endpoint: "/api/v1/generate",
    description: "Generate an image from a text prompt",
    parameters: ["prompt", "steps", "cfg_scale", "seed", "width", "height"]
  },
  {
    method: "GET",
    endpoint: "/api/v1/models",
    description: "List available models",
    parameters: []
  },
  {
    method: "POST",
    endpoint: "/api/v1/batch",
    description: "Generate multiple images in batch",
    parameters: ["prompts", "batch_size", "settings"]
  },
  {
    method: "GET",
    endpoint: "/api/v1/status",
    description: "Check API status and rate limits",
    parameters: []
  }
]

const codeExamples = [
  {
    language: "JavaScript",
    title: "Basic Image Generation",
    code: `const response = await fetch('https://api.nanobanana.com/v1/generate', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    prompt: "A beautiful sunset over mountains",
    steps: 25,
    cfg_scale: 7.5,
    width: 512,
    height: 512
  })
});

const result = await response.json();
console.log(result.image_url);`
  },
  {
    language: "Python",
    title: "Python SDK Example",
    code: `import nanobanana

client = nanobanana.Client(api_key="YOUR_API_KEY")

result = client.generate(
    prompt="A mystical forest landscape",
    steps=30,
    cfg_scale=8.0,
    width=1024,
    height=1024
)

print(f"Generated image: {result.image_url}")`
  }
]

export default function APIDocsSection() {
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    // You could add a toast notification here
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            API Documentation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Integrate Nano Banana into your applications with our comprehensive API. 
            Generate images programmatically with full control over parameters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* API Endpoints */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">API Endpoints</h3>
            <div className="space-y-4">
              {apiEndpoints.map((endpoint, index) => (
                <div key={index} className="bg-background border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-2 py-1 text-xs rounded font-mono ${
                      endpoint.method === 'POST' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                      {endpoint.endpoint}
                    </code>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{endpoint.description}</p>
                  {endpoint.parameters.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">Parameters:</p>
                      <div className="flex flex-wrap gap-1">
                        {endpoint.parameters.map((param, paramIndex) => (
                          <span key={paramIndex} className="px-2 py-1 text-xs bg-muted rounded">
                            {param}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Code Examples */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Code Examples</h3>
            <div className="space-y-6">
              {codeExamples.map((example, index) => (
                <div key={index} className="bg-background border rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      <span className="font-medium">{example.title}</span>
                      <span className="text-xs bg-muted px-2 py-1 rounded">
                        {example.language}
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => copyCode(example.code)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <pre className="text-sm font-mono bg-muted p-4 rounded overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Additional Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border rounded-lg p-6 text-center">
              <BookOpen className="h-8 w-8 mx-auto mb-4 text-green-600" />
              <h4 className="font-semibold mb-2">Full Documentation</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Complete API reference with detailed examples and best practices.
              </p>
              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Docs
              </Button>
            </div>
            
            <div className="bg-background border rounded-lg p-6 text-center">
              <Download className="h-8 w-8 mx-auto mb-4 text-green-600" />
              <h4 className="font-semibold mb-2">SDK Downloads</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Official SDKs for Python, JavaScript, and other popular languages.
              </p>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download SDKs
              </Button>
            </div>
            
            <div className="bg-background border rounded-lg p-6 text-center">
              <Code className="h-8 w-8 mx-auto mb-4 text-green-600" />
              <h4 className="font-semibold mb-2">API Key</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get your API key to start integrating Nano Banana into your projects.
              </p>
              <Button variant="outline" size="sm">
                Get API Key
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
