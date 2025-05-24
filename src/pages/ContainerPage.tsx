import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ExplanationBlock from '../components/ExplanationBlock';
import WidgetPage from '../components/WidgetPage';

const ContainerPage: React.FC = () => {
  const containerCode = `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Exemplo Container Widget',
      theme: ThemeData(
        primarySwatch: Colors.indigo,
      ),
      home: const ContainerExampleScreen(),
    );
  }
}

class ContainerExampleScreen extends StatelessWidget {
  const ContainerExampleScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Exemplos de Container'),
        backgroundColor: Colors.indigo,
      ),
      // Usando ListView para permitir rolagem se o conteúdo exceder a tela
      body: ListView(
        padding: const EdgeInsets.all(16.0),
        children: [
          // Exemplo 1: Container Básico com Cor
          Container(
            width: 200, // Largura fixa
            height: 100, // Altura fixa
            color: Colors.blue, // Cor de fundo
            child: const Center(
              child: Text(
                'Container Básico',
                style: TextStyle(color: Colors.white),
              ),
            ),
          ),
          const SizedBox(height: 20), // Espaçamento entre exemplos

          // Exemplo 2: Container com Decoração (BoxDecoration)
          Container(
            width: double.infinity, // Ocupa toda a largura disponível
            height: 120,
            // Não podemos usar color e decoration ao mesmo tempo
            // A cor deve ser definida dentro da decoration
            decoration: BoxDecoration(
              color: Colors.amber, // Cor de fundo
              borderRadius: BorderRadius.circular(12), // Cantos arredondados
              border: Border.all(
                color: Colors.orange, // Cor da borda
                width: 3, // Espessura da borda
              ),
              boxShadow: [
                BoxShadow(
                  color: Colors.grey.withOpacity(0.5), // Cor da sombra
                  spreadRadius: 2, // Quanto a sombra se espalha
                  blurRadius: 5, // Quão borrada é a sombra
                  offset: const Offset(0, 3), // Deslocamento (horizontal, vertical)
                ),
              ],
            ),
            child: const Center(
              child: Text(
                'Container com Decoração',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ),
          const SizedBox(height: 20),

          // Exemplo 3: Container com Padding e Margin
          Container(
            // Margin: espaço FORA do container (entre este container e outros elementos)
            margin: const EdgeInsets.all(10),
            // Padding: espaço DENTRO do container (entre a borda e o conteúdo)
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: Colors.lightGreen,
              borderRadius: BorderRadius.circular(8),
            ),
            child: const Text(
              'Este Container tem padding interno de 20px e margin externa de 10px.',
              style: TextStyle(color: Colors.white),
            ),
          ),
          const SizedBox(height: 20),

          // Exemplo 4: Container com Alinhamento
          Container(
            width: double.infinity,
            height: 150,
            color: Colors.purple,
            // Alinhamento do filho dentro do Container
            alignment: Alignment.bottomRight,
            child: const Text(
              'Alinhado à direita e abaixo',
              style: TextStyle(color: Colors.white),
            ),
          ),
          const SizedBox(height: 20),

          // Exemplo 5: Container com Gradiente
          Container(
            width: double.infinity,
            height: 120,
            decoration: const BoxDecoration(
              // Gradiente linear (também existem RadialGradient e SweepGradient)
              gradient: LinearGradient(
                begin: Alignment.topLeft, // Onde o gradiente começa
                end: Alignment.bottomRight, // Onde o gradiente termina
                colors: [
                  Colors.blue, // Cor inicial
                  Colors.purple, // Cor final
                ],
              ),
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(20),
                bottomRight: Radius.circular(20),
              ),
            ),
            child: const Center(
              child: Text(
                'Container com Gradiente',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ),
          const SizedBox(height: 20),

          // Exemplo 6: Container com Transform
          Container(
            width: 200,
            height: 100,
            // Transform aplica transformações 2D/3D ao container
            transform: Matrix4.rotationZ(0.1), // Rotação leve no eixo Z
            decoration: BoxDecoration(
              color: Colors.redAccent,
              borderRadius: BorderRadius.circular(8),
            ),
            child: const Center(
              child: Text(
                'Container Rotacionado',
                style: TextStyle(color: Colors.white),
              ),
            ),
          ),
        ],
      ),
    );
  }
}`;

  return (
    <WidgetPage 
      title="Container" 
      description="O Container é um widget versátil para pintura, posicionamento e dimensionamento. Ele combina widgets comuns de pintura, posicionamento e dimensionamento em um único widget."
    >
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Código de Exemplo</h3>
      <CodeBlock code={containerCode} />
      
      <ExplanationBlock title="O que é o Container?">
        <p>
          O widget <code>Container</code> é um dos widgets mais versáteis e frequentemente utilizados no Flutter. 
          Ele combina vários widgets em um só, permitindo:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Definir dimensões (largura e altura)</li>
          <li>Aplicar padding (espaçamento interno)</li>
          <li>Aplicar margin (espaçamento externo)</li>
          <li>Adicionar decorações (cores, bordas, sombras, gradientes)</li>
          <li>Posicionar e alinhar widgets filhos</li>
          <li>Aplicar transformações (rotação, escala, etc.)</li>
        </ul>
      </ExplanationBlock>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Exemplos Explicados</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium text-blue-600">Container Básico com Cor</h4>
          <CodeBlock code={`Container(
  width: 200, // Largura fixa
  height: 100, // Altura fixa
  color: Colors.blue, // Cor de fundo
  child: const Center(
    child: Text(
      'Container Básico',
      style: TextStyle(color: Colors.white),
    ),
  ),
),`} />
          <p className="mt-2">
            Este é um uso básico do <code>Container</code> com:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Dimensões fixas (200x100 pixels)</li>
            <li>Cor de fundo azul</li>
            <li>Um widget <code>Text</code> centralizado como filho</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Container com Decoração</h4>
          <CodeBlock code={`Container(
  width: double.infinity, // Ocupa toda a largura disponível
  height: 120,
  // Não podemos usar color e decoration ao mesmo tempo
  // A cor deve ser definida dentro da decoration
  decoration: BoxDecoration(
    color: Colors.amber, // Cor de fundo
    borderRadius: BorderRadius.circular(12), // Cantos arredondados
    border: Border.all(
      color: Colors.orange, // Cor da borda
      width: 3, // Espessura da borda
    ),
    boxShadow: [
      BoxShadow(
        color: Colors.grey.withOpacity(0.5), // Cor da sombra
        spreadRadius: 2, // Quanto a sombra se espalha
        blurRadius: 5, // Quão borrada é a sombra
        offset: const Offset(0, 3), // Deslocamento (horizontal, vertical)
      ),
    ],
  ),
  child: const Center(
    child: Text(
      'Container com Decoração',
      style: TextStyle(
        fontSize: 18,
        fontWeight: FontWeight.bold,
      ),
    ),
  ),
),`} />
          <p className="mt-2">
            Este exemplo demonstra o uso de <code>BoxDecoration</code> para aplicar estilos avançados:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Cor de fundo âmbar</li>
            <li>Cantos arredondados com raio de 12 pixels</li>
            <li>Borda laranja com 3 pixels de espessura</li>
            <li>Sombra cinza com deslocamento vertical</li>
          </ul>
          <p className="mt-2 text-red-600">
            <strong>Importante:</strong> Não é possível usar as propriedades <code>color</code> e <code>decoration</code> 
            simultaneamente. Se você precisar de uma cor de fundo e outras decorações, defina a cor dentro da <code>BoxDecoration</code>.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Container com Padding e Margin</h4>
          <CodeBlock code={`Container(
  // Margin: espaço FORA do container (entre este container e outros elementos)
  margin: const EdgeInsets.all(10),
  // Padding: espaço DENTRO do container (entre a borda e o conteúdo)
  padding: const EdgeInsets.all(20),
  decoration: BoxDecoration(
    color: Colors.lightGreen,
    borderRadius: BorderRadius.circular(8),
  ),
  child: const Text(
    'Este Container tem padding interno de 20px e margin externa de 10px.',
    style: TextStyle(color: Colors.white),
  ),
),`} />
          <p className="mt-2">
            Este exemplo mostra a diferença entre <code>padding</code> e <code>margin</code>:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><code>margin</code>: Espaço <strong>fora</strong> do container, entre ele e outros elementos</li>
            <li><code>padding</code>: Espaço <strong>dentro</strong> do container, entre sua borda e seu conteúdo</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Container com Gradiente</h4>
          <CodeBlock code={`Container(
  width: double.infinity,
  height: 120,
  decoration: const BoxDecoration(
    // Gradiente linear (também existem RadialGradient e SweepGradient)
    gradient: LinearGradient(
      begin: Alignment.topLeft, // Onde o gradiente começa
      end: Alignment.bottomRight, // Onde o gradiente termina
      colors: [
        Colors.blue, // Cor inicial
        Colors.purple, // Cor final
      ],
    ),
    borderRadius: BorderRadius.only(
      topLeft: Radius.circular(20),
      bottomRight: Radius.circular(20),
    ),
  ),
  child: const Center(
    child: Text(
      'Container com Gradiente',
      style: TextStyle(
        color: Colors.white,
        fontSize: 18,
        fontWeight: FontWeight.bold,
      ),
    ),
  ),
),`} />
          <p className="mt-2">
            Este exemplo demonstra como aplicar um gradiente de cores ao fundo do <code>Container</code>:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Usa <code>LinearGradient</code> que transiciona de azul para roxo</li>
            <li>Define pontos de início (<code>begin</code>) e fim (<code>end</code>) do gradiente</li>
            <li>Aplica arredondamento apenas em cantos específicos usando <code>BorderRadius.only</code></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="text-lg font-semibold text-yellow-800 mb-2">Dica</h4>
        <p>
          O <code>Container</code> é extremamente versátil, mas nem sempre é necessário. Se você precisa apenas de:
        </p>
        <ul className="list-disc pl-6 mt-1 space-y-1">
          <li>Padding - Use o widget <code>Padding</code></li>
          <li>Centralizar um filho - Use o widget <code>Center</code></li>
          <li>Colorir o fundo - Use o widget <code>ColoredBox</code></li>
          <li>Aplicar constraints de tamanho - Use <code>SizedBox</code> ou <code>ConstrainedBox</code></li>
        </ul>
        <p className="mt-2">
          Usar widgets mais específicos pode melhorar a performance e tornar seu código mais claro.
        </p>
      </div>
    </WidgetPage>
  );
};

export default ContainerPage;
