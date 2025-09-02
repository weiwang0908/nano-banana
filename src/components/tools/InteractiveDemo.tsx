'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Wand2, Download, Share2, RotateCcw } from 'lucide-react'

export default function InteractiveDemo() {
  const [prompt, setPrompt] = useState('A beautiful sunset over mountains, digital art style')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)

  const handleGenerate = async () => {
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setGeneratedImage('/api/placeholder/512/512')
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Try It Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience Nano Banana's power with our interactive demo. 
            No registration required - start creating right away!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="space-y-6">
              <div className="bg-background border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Prompt Settings</h3>
                
                {/* Prompt Input */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Describe your image</label>
                    <textarea
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      className="w-full p-3 border rounded-lg resize-none"
                      rows={3}
                      placeholder="Enter a detailed description of the image you want to create..."
                    />
                  </div>

                  {/* Quick Presets */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Quick Presets</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'Portrait, professional photo',
                        'Landscape, oil painting style',
                        'Abstract art, vibrant colors',
                        'Fantasy character, detailed'
                      ].map((preset, index) => (
                        <button
                          key={index}
                          onClick={() => setPrompt(preset)}
                          className="p-2 text-xs border rounded hover:bg-muted transition-colors"
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Generate Button */}
                  <Button 
                    onClick={handleGenerate}
                    disabled={isGenerating || !prompt.trim()}
                    className="w-full"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Generating...
                      </>
                    ) : (
                      <>
                        <Wand2 className="mr-2 h-4 w-4" />
                        Generate Image
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Pro Tips</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Be specific about style and composition</li>
                  <li>• Include lighting and mood details</li>
                  <li>• Mention artistic style or medium</li>
                  <li>• Add quality keywords like "high resolution"</li>
                </ul>
              </div>
            </div>

            {/* Output Panel */}
            <div className="space-y-6">
              <div className="bg-background border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Generated Image</h3>
                
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  {generatedImage ? (
                    <div className="relative w-full h-full">
                      <img 
                        src={generatedImage} 
                        alt="Generated image" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        <Button size="sm" variant="secondary">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <Wand2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Your generated image will appear here</p>
                    </div>
                  )}
                </div>

                {generatedImage && (
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Regenerate
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                )}
              </div>

              {/* Parameters Info */}
              <div className="bg-background border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Current Settings</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Style: Digital Art</div>
                  <div>Quality: High</div>
                  <div>Size: 512x512</div>
                  <div>Steps: 20</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
