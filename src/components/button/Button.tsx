import './button.css'
import type { JSX } from 'react';

    
function Button({ children , className }: { children: React.ReactNode, className: string[] }) :JSX.Element {
  return (
    <button className={`button ${className.join(" ")}`}>
      {children}
    </button>
  )
}

export default Button