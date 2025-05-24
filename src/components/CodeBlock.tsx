import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'dart' }) => {
  return (
    <div className="my-4 rounded-lg overflow-hidden">
      <div className="bg-gray-800 text-white text-xs px-4 py-1 flex justify-between items-center">
        <span>{language}</span>
        <span className="text-gray-400 text-xs">Flutter</span>
      </div>
      <SyntaxHighlighter 
        language={language} 
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          borderRadius: '0 0 0.5rem 0.5rem',
          fontSize: '0.9rem',
        }}
        showLineNumbers={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
