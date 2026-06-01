import sys

file_path = 'src/routes/index.tsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace google review URLs
content = content.replace(
    'const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Longair%27s+Lawn+Care+%26+Garden+Services+Newmilns";', 
    'const GOOGLE_REVIEWS_URL = "#";'
)
content = content.replace(
    'const GOOGLE_LEAVE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID";', 
    'const GOOGLE_LEAVE_REVIEW_URL = "#";'
)

# Add MessageSquarePlus to lucide-react imports if not there
if 'MessageSquarePlus' not in content:
    content = content.replace('import {', 'import {\n  MessageSquarePlus,', 1)

# Import posthog if not there
if 'import posthog from' not in content:
    content = content.replace('import { useReveal } from "@/hooks/use-reveal";', 'import { useReveal } from "@/hooks/use-reveal";\nimport posthog from "posthog-js";')

# Insert the MockupFeedback component
feedback_component = '''
function MockupFeedback() {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    
    posthog.capture("mockup_feedback", {
      feedback: feedback
    });
    
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setFeedback("");
    }, 3000);
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-4 sm:right-6 z-[60] flex flex-col items-end pointer-events-none">
      {open && (
        <div className="bg-background/95 backdrop-blur-md border border-border p-4 rounded-2xl shadow-elegant w-[280px] sm:w-[320px] mb-4 animate-fade-up pointer-events-auto origin-right">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-sm flex items-center gap-2">
              <MessageSquarePlus className="w-4 h-4 text-primary" />
              Mockup Feedback
            </h3>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {submitted ? (
            <div className="text-sm text-center py-6 text-primary font-medium flex flex-col items-center gap-2">
              <Check className="w-6 h-6" />
              Feedback sent to PostHog!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <textarea 
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="What do you think of this mockup?"
                className="w-full h-24 rounded-xl border border-input bg-background/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none placeholder:text-muted-foreground/50"
                required
              />
              <button 
                type="submit"
                className="w-full rounded-xl gradient-primary text-primary-foreground py-2 text-sm font-medium shadow-soft hover:shadow-glow transition-smooth"
              >
                Send Feedback
              </button>
            </form>
          )}
        </div>
      )}
      
      <button 
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow transition-smooth grid place-items-center pointer-events-auto group"
        aria-label="Leave feedback"
      >
        <MessageSquarePlus className="w-5 h-5 group-hover:scale-110 transition-smooth" />
      </button>
    </div>
  );
}
'''

if 'function MockupFeedback' not in content:
    content = content.replace('function DemoBadge() {', feedback_component + '\nfunction DemoBadge() {')

if '<MockupFeedback />' not in content:
    content = content.replace('<FirstTimePopup />', '<FirstTimePopup />\n      <MockupFeedback />')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
