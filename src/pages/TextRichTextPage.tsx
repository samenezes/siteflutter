import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ExplanationBlock from '../components/ExplanationBlock';
import WidgetPage from '../components/WidgetPage';

const TextRichTextPage: React.FC = () => {
  const textRichTextCode = `import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart'; // Import necessário para TextSpan com gestos

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Exemplo Text Widget',
      theme: ThemeData(
        primarySwatch: Colors.teal,
      ),
      home: const TextExampleScreen(),
    );
  }
}

class TextExampleScreen extends StatelessWidget {
  const TextExampleScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Exemplos de Text Widget'),
        backgroundColor: Colors.teal,
      ),
      // Usando ListView para permitir rolagem se o conteúdo exceder a tela
      body: ListView(
        padding: const EdgeInsets.all(16.0), // Adiciona espaçamento nas bordas
        children: [
          // Exemplo 1: Texto Simples
          const Text(
            'Este é um exemplo de texto simples.',
          ),
          const SizedBox(height: 20), // Espaçamento entre exemplos

          // Exemplo 2: Texto com Estilo Básico
          const Text(
            'Texto com estilo: negrito e itálico.',
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold, // Negrito
              fontStyle: FontStyle.italic, // Itálico
              color: Colors.blue, // Cor azul
            ),
          ),
          const SizedBox(height: 20),

          // Exemplo 3: Texto com Alinhamento Centralizado
          const Text(
            'Este texto está centralizado na largura disponível (dentro do ListView).',
            textAlign: TextAlign.center, // Alinhamento centralizado
            style: TextStyle(fontSize: 16),
          ),
          const SizedBox(height: 20),

          // Exemplo 4: Texto com Quebra de Linha e Overflow
          const Text(
            'Este é um texto muito, muito, muito longo que provavelmente precisará ser quebrado em várias linhas ou terá um overflow. Vamos ver como o Flutter lida com isso por padrão.',
            maxLines: 2, // Máximo de 2 linhas
            overflow: TextOverflow.ellipsis, // Adiciona '...' se o texto exceder
            style: TextStyle(fontSize: 16, color: Colors.red),
          ),
          const SizedBox(height: 20),

          // Exemplo 5: RichText com TextSpan para estilos diferentes
          RichText(
            text: TextSpan(
              // Estilo padrão para todo o TextSpan (pode ser herdado do tema)
              style: DefaultTextStyle.of(context).style.copyWith(fontSize: 18),
              children: <TextSpan>[
                const TextSpan(text: 'Texto com '), // Parte 1: estilo padrão
                TextSpan(
                  text: 'múltiplos estilos',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    color: Colors.green,
                    decoration: TextDecoration.underline, // Sublinhado
                  ),
                ),
                const TextSpan(text: ' e um '), // Parte 3: estilo padrão
                TextSpan(
                  text: 'link clicável',
                  style: TextStyle(
                    color: Colors.purple,
                    decoration: TextDecoration.underline,
                  ),
                  // Adiciona um reconhecedor de gestos para tornar clicável
                  recognizer: TapGestureRecognizer()
                    ..onTap = () {
                      print('Link clicável pressionado!');
                      // Aqui você poderia abrir um URL, navegar para outra tela, etc.
                    },
                ),
                const TextSpan(text: '.'), // Parte 5: estilo padrão
              ],
            ),
          ),
          const SizedBox(height: 20),

          // Exemplo 6: Texto com Sombra
          const Text(
            'Texto com Sombra',
            style: TextStyle(
              fontSize: 24,
              color: Colors.orange,
              shadows: [
                Shadow(
                  blurRadius: 5.0, // Raio do desfoque da sombra
                  color: Colors.black.withOpacity(0.5), // Cor da sombra com opacidade
                  offset: Offset(2.0, 2.0), // Deslocamento da sombra (horizontal, vertical)
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}`;

  return (
    <WidgetPage 
      title="Text e RichText" 
      description="O widget Text exibe uma string de texto com um único estilo. Para texto com múltiplos estilos ou interatividade em partes específicas, usamos RichText com TextSpan."
    >
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Código de Exemplo</h3>
      <CodeBlock code={textRichTextCode} />
      
      <ExplanationBlock title="O que é o widget Text?">
        <p>
          O widget <code>Text</code> é usado para exibir uma string de texto com um único estilo. 
          É um dos widgets mais básicos e frequentemente utilizados no Flutter.
        </p>
        <p className="mt-2">
          Você pode personalizar a aparência do texto usando a propriedade <code>style</code>, 
          que recebe um objeto <code>TextStyle</code> com propriedades como <code>fontSize</code>, 
          <code>fontWeight</code>, <code>color</code>, etc.
        </p>
      </ExplanationBlock>
      
      <ExplanationBlock title="O que é o widget RichText?">
        <p>
          O widget <code>RichText</code> permite exibir texto com diferentes estilos na mesma linha ou parágrafo.
          Ele é usado em conjunto com <code>TextSpan</code>, que representa um segmento de texto com um estilo específico.
        </p>
        <p className="mt-2">
          Com <code>RichText</code>, você pode criar textos complexos com partes clicáveis, cores diferentes, 
          tamanhos de fonte variados e muito mais.
        </p>
      </ExplanationBlock>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Exemplos Explicados</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium text-blue-600">Texto Simples</h4>
          <CodeBlock code={`const Text(
  'Este é um exemplo de texto simples.',
),`} />
          <p className="mt-2">
            Este é o uso mais básico do widget <code>Text</code>. Passamos apenas a string que queremos exibir.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Texto com Estilo</h4>
          <CodeBlock code={`const Text(
  'Texto com estilo: negrito e itálico.',
  style: TextStyle(
    fontSize: 18,
    fontWeight: FontWeight.bold, // Negrito
    fontStyle: FontStyle.italic, // Itálico
    color: Colors.blue, // Cor azul
  ),
),`} />
          <p className="mt-2">
            Aqui, usamos a propriedade <code>style</code> para aplicar formatação ao texto:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><code>fontSize: 18</code> - Define o tamanho da fonte como 18 pixels lógicos</li>
            <li><code>fontWeight: FontWeight.bold</code> - Define o peso da fonte como negrito</li>
            <li><code>fontStyle: FontStyle.italic</code> - Define o estilo da fonte como itálico</li>
            <li><code>color: Colors.blue</code> - Define a cor do texto como azul</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">RichText com TextSpan</h4>
          <CodeBlock code={`RichText(
  text: TextSpan(
    style: DefaultTextStyle.of(context).style.copyWith(fontSize: 18),
    children: <TextSpan>[
      const TextSpan(text: 'Texto com '),
      TextSpan(
        text: 'múltiplos estilos',
        style: TextStyle(
          fontWeight: FontWeight.bold,
          color: Colors.green,
          decoration: TextDecoration.underline,
        ),
      ),
      const TextSpan(text: ' e um '),
      TextSpan(
        text: 'link clicável',
        style: TextStyle(
          color: Colors.purple,
          decoration: TextDecoration.underline,
        ),
        recognizer: TapGestureRecognizer()
          ..onTap = () {
            print('Link clicável pressionado!');
          },
      ),
      const TextSpan(text: '.'),
    ],
  ),
),`} />
          <p className="mt-2">
            Este exemplo demonstra o uso de <code>RichText</code> com <code>TextSpan</code> para criar texto com múltiplos estilos:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>O <code>TextSpan</code> raiz define um estilo base para todos os filhos</li>
            <li>Cada <code>TextSpan</code> filho representa um segmento de texto com seu próprio estilo</li>
            <li>O segmento "múltiplos estilos" é verde, negrito e sublinhado</li>
            <li>O segmento "link clicável" tem um <code>TapGestureRecognizer</code> que o torna interativo</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="text-lg font-semibold text-yellow-800 mb-2">Dica</h4>
        <p>
          Para textos simples, use o widget <code>Text</code>. Quando precisar de diferentes estilos no mesmo texto 
          ou partes clicáveis, use <code>RichText</code> com <code>TextSpan</code>.
        </p>
        <p className="mt-2">
          Lembre-se que para usar <code>TapGestureRecognizer</code>, você precisa importar <code>package:flutter/gestures.dart</code>.
        </p>
      </div>
    </WidgetPage>
  );
};

export default TextRichTextPage;
