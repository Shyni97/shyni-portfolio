export function CosmicOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large floating orbs */}
      <div 
        className="cosmic-orb cosmic-orb-1 animate-float-slow"
        style={{
          top: '10%',
          left: '5%',
          animationDelay: '0s',
        }}
      />
      <div 
        className="cosmic-orb cosmic-orb-3 animate-float-slow"
        style={{
          top: '60%',
          right: '10%',
          animationDelay: '3s',
        }}
      />
      <div 
        className="cosmic-orb cosmic-orb-3 animate-float-slow"
        style={{
          bottom: '20%',
          left: '15%',
          animationDelay: '6s',
        }}
      />
      <div 
        className="cosmic-orb cosmic-orb-1 animate-float-slow"
        style={{
          top: '40%',
          right: '25%',
          animationDelay: '9s',
        }}
      />
      
      {/* Subtle gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-blue-900/10 via-transparent to-transparent" />
    </div>
  );
}
