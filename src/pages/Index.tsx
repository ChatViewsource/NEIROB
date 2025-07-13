import { Button } from "@/components/ui/button";
import { ExternalLink, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const contractAddress = "2XYgocKz9MvkNVVyj85kdM2VxsUwrJeQUZVD4qmD4dYT";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    });
  };

  const socialLinks = [
    { name: "Telegram", url: "https://t.me/bobbythecatsol" },
    { name: "Twitter", url: "https://x.com/Bobbythecatsol" },
    { name: "Forbes", url: "https://forbes.com/digital-assets/assets/bobby-the-cat-btc-2/" },
    { name: "Bitrue", url: "https://bitrue.com/blog/bobby-the-cat-btc-listing-guide-bitrue-alpha" },
    { name: "PumpSwap", url: "https://swap.pump.fun/?input=So11111111111111111111111111111111111111112&output=2XYgocKz9MvkNVVyj85kdM2VxsUwrJeQUZVD4qmD4dYT" },
  ];

  return (
    <div className="min-h-screen bg-gradient-glow">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="social"
              size="sm"
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                {link.name}
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <img 
            src="/lovable-uploads/a2ae523c-748d-49f0-864b-993cc56f8ca8.png" 
            alt="Neiro Bobby with rocket" 
            className="w-64 h-64 mx-auto rounded-3xl shadow-warm mb-8 object-cover"
          />
          
          <h1 className="text-6xl md:text-8xl font-black text-foreground mb-4 tracking-tight">
            NEIRO
            <br />
            BOBBY
            <br />
            <span className="text-4xl md:text-6xl">($NEIRO)</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Barely fruitful. Barely useful. Fully real.
          </p>

          {/* Contract Address */}
          <div className="bg-card rounded-2xl p-6 max-w-2xl mx-auto mb-12 shadow-warm">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <code className="text-sm md:text-base break-all text-muted-foreground flex-1">
                {contractAddress}
              </code>
              <Button
                variant="warm"
                size="sm"
                onClick={copyToClipboard}
                className="flex-shrink-0"
              >
                <Copy className="w-4 h-4" />
                Copy
              </Button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src="/lovable-uploads/e63686d4-7b96-42c2-a615-5ca4b3d502df.png" 
                alt="Happy Neiro Bobby" 
                className="w-full max-w-md mx-auto rounded-3xl shadow-warm object-cover"
              />
            </div>
            <div className="text-left">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Neiro Bobby isn't just any Shiba—he's the living, wagging parody of something way too serious. 
                While others argue about charts and coins, Bobby chases his tail and accidentally buys treats with someone's wallet. 
                That's right. <strong className="text-primary">$NEIRO</strong> isn't what you think—it stands for <em>Neiro Bobby</em>.
              </p>
              <br />
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                He's fluffy, he's happy, and he might've just knocked over your portfolio. 
                Bobby doesn't care. He's got nine lives and zero stress.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-16">
          <Button
            variant="warm"
            size="lg"
            asChild
            className="text-xl px-8 py-6"
          >
            <a 
              href={`https://dexscreener.com/solana/${contractAddress}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View on DexScreener
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center text-muted-foreground py-8">
          <p className="text-sm">
            Because sometimes the best investments are the ones that make you smile.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
