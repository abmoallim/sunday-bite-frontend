
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';

const RateUsSection: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Rate Your Experience</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Share Your Feedback</CardTitle>
              <CardDescription>
                We value your opinion! Please rate your experience and leave us a review.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="mb-4">How would you rate your experience?</p>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="focus:outline-none"
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => setRating(star)}
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= (hoveredRating || rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="review" className="block text-sm font-medium mb-2">
                  Your Review (Optional)
                </label>
                <Textarea
                  id="review"
                  placeholder="Tell us about your experience..."
                  className="min-h-[100px]"
                />
              </div>
              
              <Button className="w-full">Submit Review</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RateUsSection;
