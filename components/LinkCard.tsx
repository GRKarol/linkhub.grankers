import React from 'react';
import { LinkItem } from '../types';
import { ChevronRight, ExternalLink } from 'lucide-react';

interface LinkCardProps {
  item: LinkItem;
}

export const LinkCard: React.FC<LinkCardProps> = ({ item }) => {
  const Wrapper = item.url ? 'a' : 'button';
  const props = item.url 
    ? { href: item.url, target: '_blank', rel: 'noopener noreferrer' } 
    : { onClick: item.action };

  return (
    <Wrapper
      {...props}
      className={`
        group relative w-full max-w-xl mx-auto p-4 md:p-5 mb-3 md:mb-4
        flex items-center justify-between
        bg-neutral-900/40 hover:bg-neutral-900/60 backdrop-blur-md
        border border-yellow-600/20 hover:border-yellow-500/60
        rounded-lg transition-all duration-500 ease-out
        transform hover:scale-[1.02] hover:shadow-[0_0_25px_-5px_rgba(212,175,55,0.3)]
        cursor-pointer overflow-hidden
        ${item.special ? 'shadow-[0_0_15px_-5px_rgba(212,175,55,0.2)] border-yellow-600/40' : ''}
      `}
    >
      {/* Golden Sheen Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />

      <div className="flex items-center space-x-3 md:space-x-5 relative z-10">
        <div className={`
          p-2.5 md:p-3 rounded-md border border-yellow-500/20 flex-shrink-0
          ${item.special ? 'bg-gradient-to-br from-yellow-700/20 to-yellow-900/20 text-yellow-400' : 'bg-white/5 text-gray-400 group-hover:text-yellow-400'}
          transition-colors duration-300
        `}>
          <item.icon size={20} className="md:w-[22px] md:h-[22px]" strokeWidth={1.5} />
        </div>
        
        <div className="text-left min-w-0">
          <h3 className="text-sm md:text-lg font-bold text-gray-100 tracking-wide group-hover:text-gradient-gold transition-colors font-[Cinzel] truncate">
            {item.title}
          </h3>
          {item.subtext && (
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 group-hover:text-yellow-500/80 transition-colors mt-0.5 md:mt-1 truncate">
              {item.subtext}
            </p>
          )}
        </div>
      </div>

      <div className="text-gray-600 group-hover:text-yellow-400 transition-colors duration-300 relative z-10 pl-2">
        {item.url ? <ExternalLink size={16} className="md:w-[18px] md:h-[18px]" /> : <ChevronRight size={16} className="md:w-[18px] md:h-[18px]" />}
      </div>
    </Wrapper>
  );
};