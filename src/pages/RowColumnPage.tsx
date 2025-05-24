import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ExplanationBlock from '../components/ExplanationBlock';
import WidgetPage from '../components/WidgetPage';

const RowColumnPage: React.FC = () => {
  const rowColumnCode = `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Exemplo Row e Column',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const RowColumnExampleScreen(),
    );
  }
}

class RowColumnExampleScreen extends StatelessWidget {
  const RowColumnExampleScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Exemplos de Row e Column'),
        backgroundColor: Colors.blue,
      ),
      body: ListView(
        padding: const EdgeInsets.all(16.0),
        children: [
          // Título da seção Row
          const Text(
            'Exemplos de Row (Layout Horizontal)',
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 10),

          // Exemplo 1: Row Básica com MainAxisAlignment.start
          Container(
            padding: const EdgeInsets.all(8.0),
            color: Colors.amber.shade100,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Row com MainAxisAlignment.start:'),
                const SizedBox(height: 10),
                Row(
                  mainAxisAlignment: MainAxisAlignment.start, // Alinhamento horizontal
                  children: [
                    Container(
                      width: 50,
                      height: 50,
                      color: Colors.red,
                      child: const Center(child: Text('1')),
                    ),
                    Container(
                      width: 50,
                      height: 50,
                      color: Colors.green,
                      child: const Center(child: Text('2')),
                    ),
                    Container(
                      width: 50,
                      height: 50,
                      color: Colors.blue,
                      child: const Center(child: Text('3')),
                    ),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),

          // Exemplo 2: Row com MainAxisAlignment.spaceBetween
          Container(
            padding: const EdgeInsets.all(8.0),
            color: Colors.amber.shade100,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Row com MainAxisAlignment.spaceBetween:'),
                const SizedBox(height: 10),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween, // Espaço entre os widgets
                  children: [
                    Container(
                      width: 50,
                      height: 50,
                      color: Colors.red,
                      child: const Center(child: Text('1')),
                    ),
                    Container(
                      width: 50,
                      height: 50,
                      color: Colors.green,
                      child: const Center(child: Text('2')),
                    ),
                    Container(
                      width: 50,
                      height: 50,
                      color: Colors.blue,
                      child: const Center(child: Text('3')),
                    ),
                  ],
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),

          // Exemplo 3: Row com CrossAxisAlignment.stretch
          Container(
            height: 100, // Altura fixa para demonstrar o stretch
            padding: const EdgeInsets.all(8.0),
            color: Colors.amber.shade100,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Row com CrossAxisAlignment.stretch:'),
                const SizedBox(height: 10),
                Expanded(
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.stretch, // Estica na vertical
                    children: [
                      Container(
                        width: 50,
                        color: Colors.red,
                        child: const Center(child: Text('1')),
                      ),
                      const SizedBox(width: 10),
                      Container(
                        width: 50,
                        color: Colors.green,
                        child: const Center(child: Text('2')),
                      ),
                      const SizedBox(width: 10),
                      Container(
                        width: 50,
                        color: Colors.blue,
                        child: const Center(child: Text('3')),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 30),

          // Título da seção Column
          const Text(
            'Exemplos de Column (Layout Vertical)',
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 10),

          // Exemplo 4: Column Básica com MainAxisAlignment.center
          Container(
            height: 200, // Altura fixa para demonstrar o alinhamento
            padding: const EdgeInsets.all(8.0),
            color: Colors.lightBlue.shade100,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center, // Centraliza verticalmente
              children: [
                Container(
                  width: 100,
                  height: 30,
                  color: Colors.red,
                  child: const Center(child: Text('Item 1')),
                ),
                const SizedBox(height: 10),
                Container(
                  width: 100,
                  height: 30,
                  color: Colors.green,
                  child: const Center(child: Text('Item 2')),
                ),
                const SizedBox(height: 10),
                Container(
                  width: 100,
                  height: 30,
                  color: Colors.blue,
                  child: const Center(child: Text('Item 3')),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),

          // Exemplo 5: Column com CrossAxisAlignment.end
          Container(
            padding: const EdgeInsets.all(8.0),
            color: Colors.lightBlue.shade100,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.end, // Alinha à direita
              children: [
                Container(
                  width: 150,
                  height: 30,
                  color: Colors.red,
                  child: const Center(child: Text('Largura 150')),
                ),
                const SizedBox(height: 10),
                Container(
                  width: 200,
                  height: 30,
                  color: Colors.green,
                  child: const Center(child: Text('Largura 200')),
                ),
                const SizedBox(height: 10),
                Container(
                  width: 100,
                  height: 30,
                  color: Colors.blue,
                  child: const Center(child: Text('Largura 100')),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),

          // Exemplo 6: Column com MainAxisSize.min
          Container(
            padding: const EdgeInsets.all(8.0),
            color: Colors.lightBlue.shade100,
            child: Column(
              mainAxisSize: MainAxisSize.min, // Ocupa apenas o espaço necessário
              children: [
                const Text('Column com MainAxisSize.min:'),
                const SizedBox(height: 10),
                Container(
                  width: double.infinity,
                  height: 30,
                  color: Colors.red,
                  child: const Center(child: Text('Item 1')),
                ),
                const SizedBox(height: 10),
                Container(
                  width: double.infinity,
                  height: 30,
                  color: Colors.green,
                  child: const Center(child: Text('Item 2')),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),

          // Exemplo 7: Combinando Row e Column
          Container(
            padding: const EdgeInsets.all(8.0),
            color: Colors.purple.shade100,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Combinando Row e Column:'),
                const SizedBox(height: 10),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    // Primeira coluna dentro da Row
                    Column(
                      children: [
                        Container(
                          width: 60,
                          height: 60,
                          color: Colors.red,
                          child: const Center(child: Text('1')),
                        ),
                        const SizedBox(height: 10),
                        Container(
                          width: 60,
                          height: 60,
                          color: Colors.green,
                          child: const Center(child: Text('2')),
                        ),
                      ],
                    ),
                    // Segunda coluna dentro da Row
                    Column(
                      children: [
                        Container(
                          width: 60,
                          height: 60,
                          color: Colors.blue,
                          child: const Center(child: Text('3')),
                        ),
                        const SizedBox(height: 10),
                        Container(
                          width: 60,
                          height: 60,
                          color: Colors.yellow,
                          child: const Center(child: Text('4')),
                        ),
                      ],
                    ),
                  ],
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
      title="Row e Column" 
      description="Row e Column são widgets fundamentais para criar layouts lineares no Flutter. Row organiza widgets horizontalmente, enquanto Column os organiza verticalmente."
    >
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Código de Exemplo</h3>
      <CodeBlock code={rowColumnCode} />
      
      <ExplanationBlock title="O que são Row e Column?">
        <p>
          <code>Row</code> e <code>Column</code> são widgets de layout fundamentais no Flutter:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><code>Row</code>: Organiza seus widgets filhos horizontalmente (da esquerda para a direita)</li>
          <li><code>Column</code>: Organiza seus widgets filhos verticalmente (de cima para baixo)</li>
        </ul>
        <p className="mt-2">
          Ambos são baseados no modelo de layout Flex do Flutter, que é semelhante ao Flexbox do CSS na web.
        </p>
      </ExplanationBlock>
      
      <ExplanationBlock title="Propriedades Importantes">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">mainAxisAlignment</h4>
            <p>Controla como os filhos são posicionados ao longo do eixo principal:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Para <code>Row</code>: eixo horizontal</li>
              <li>Para <code>Column</code>: eixo vertical</li>
            </ul>
            <p className="mt-1">Valores possíveis:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li><code>MainAxisAlignment.start</code>: Alinha os filhos no início do eixo principal</li>
              <li><code>MainAxisAlignment.end</code>: Alinha os filhos no final do eixo principal</li>
              <li><code>MainAxisAlignment.center</code>: Centraliza os filhos no eixo principal</li>
              <li><code>MainAxisAlignment.spaceBetween</code>: Distribui o espaço uniformemente entre os filhos</li>
              <li><code>MainAxisAlignment.spaceAround</code>: Distribui o espaço uniformemente ao redor dos filhos</li>
              <li><code>MainAxisAlignment.spaceEvenly</code>: Distribui o espaço uniformemente entre, antes e depois dos filhos</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold">crossAxisAlignment</h4>
            <p>Controla como os filhos são posicionados ao longo do eixo cruzado:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Para <code>Row</code>: eixo vertical</li>
              <li>Para <code>Column</code>: eixo horizontal</li>
            </ul>
            <p className="mt-1">Valores possíveis:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li><code>CrossAxisAlignment.start</code>: Alinha os filhos no início do eixo cruzado</li>
              <li><code>CrossAxisAlignment.end</code>: Alinha os filhos no final do eixo cruzado</li>
              <li><code>CrossAxisAlignment.center</code>: Centraliza os filhos no eixo cruzado</li>
              <li><code>CrossAxisAlignment.stretch</code>: Estica os filhos para preencher o eixo cruzado</li>
              <li><code>CrossAxisAlignment.baseline</code>: Alinha os filhos por suas linhas de base (para texto)</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold">mainAxisSize</h4>
            <p>Determina quanto espaço o widget deve ocupar no eixo principal:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li><code>MainAxisSize.max</code>: Ocupa todo o espaço disponível (padrão)</li>
              <li><code>MainAxisSize.min</code>: Ocupa apenas o espaço necessário para seus filhos</li>
            </ul>
          </div>
        </div>
      </ExplanationBlock>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Exemplos Explicados</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium text-blue-600">Row com MainAxisAlignment.start</h4>
          <CodeBlock code={`Row(
  mainAxisAlignment: MainAxisAlignment.start, // Alinhamento horizontal
  children: [
    Container(
      width: 50,
      height: 50,
      color: Colors.red,
      child: const Center(child: Text('1')),
    ),
    Container(
      width: 50,
      height: 50,
      color: Colors.green,
      child: const Center(child: Text('2')),
    ),
    Container(
      width: 50,
      height: 50,
      color: Colors.blue,
      child: const Center(child: Text('3')),
    ),
  ],
),`} />
          <p className="mt-2">
            Este exemplo mostra uma <code>Row</code> com três containers coloridos alinhados ao início (esquerda).
            <code>MainAxisAlignment.start</code> é o valor padrão, então tecnicamente não precisaria ser especificado.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Row com MainAxisAlignment.spaceBetween</h4>
          <CodeBlock code={`Row(
  mainAxisAlignment: MainAxisAlignment.spaceBetween, // Espaço entre os widgets
  children: [
    Container(
      width: 50,
      height: 50,
      color: Colors.red,
      child: const Center(child: Text('1')),
    ),
    Container(
      width: 50,
      height: 50,
      color: Colors.green,
      child: const Center(child: Text('2')),
    ),
    Container(
      width: 50,
      height: 50,
      color: Colors.blue,
      child: const Center(child: Text('3')),
    ),
  ],
),`} />
          <p className="mt-2">
            Neste exemplo, <code>MainAxisAlignment.spaceBetween</code> distribui o espaço disponível uniformemente 
            entre os filhos. O primeiro filho fica no início e o último no final, com espaço igual entre eles.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Column com CrossAxisAlignment.end</h4>
          <CodeBlock code={`Column(
  crossAxisAlignment: CrossAxisAlignment.end, // Alinha à direita
  children: [
    Container(
      width: 150,
      height: 30,
      color: Colors.red,
      child: const Center(child: Text('Largura 150')),
    ),
    const SizedBox(height: 10),
    Container(
      width: 200,
      height: 30,
      color: Colors.green,
      child: const Center(child: Text('Largura 200')),
    ),
    const SizedBox(height: 10),
    Container(
      width: 100,
      height: 30,
      color: Colors.blue,
      child: const Center(child: Text('Largura 100')),
    ),
  ],
),`} />
          <p className="mt-2">
            Este exemplo mostra uma <code>Column</code> com três containers de larguras diferentes.
            <code>CrossAxisAlignment.end</code> alinha todos os filhos à direita (final do eixo cruzado).
            Observe como os containers com larguras diferentes ficam alinhados pela borda direita.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Combinando Row e Column</h4>
          <CodeBlock code={`Row(
  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  children: [
    // Primeira coluna dentro da Row
    Column(
      children: [
        Container(
          width: 60,
          height: 60,
          color: Colors.red,
          child: const Center(child: Text('1')),
        ),
        const SizedBox(height: 10),
        Container(
          width: 60,
          height: 60,
          color: Colors.green,
          child: const Center(child: Text('2')),
        ),
      ],
    ),
    // Segunda coluna dentro da Row
    Column(
      children: [
        Container(
          width: 60,
          height: 60,
          color: Colors.blue,
          child: const Center(child: Text('3')),
        ),
        const SizedBox(height: 10),
        Container(
          width: 60,
          height: 60,
          color: Colors.yellow,
          child: const Center(child: Text('4')),
        ),
      ],
    ),
  ],
),`} />
          <p className="mt-2">
            Este exemplo demonstra como combinar <code>Row</code> e <code>Column</code> para criar layouts mais complexos.
            Temos uma <code>Row</code> com duas <code>Column</code>s como filhas, cada uma contendo dois containers.
            O resultado é uma grade 2x2 de containers coloridos.
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="text-lg font-semibold text-yellow-800 mb-2">Dicas</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Use <code>SizedBox</code> para adicionar espaçamento entre os filhos (como <code>SizedBox(width: 10)</code> ou <code>SizedBox(height: 10)</code>).
          </li>
          <li>
            Se um filho de <code>Row</code> ou <code>Column</code> precisar ocupar todo o espaço disponível, envolva-o com <code>Expanded</code>.
          </li>
          <li>
            Para layouts mais complexos, considere usar <code>Flex</code>, <code>Wrap</code>, <code>Stack</code> ou <code>GridView</code>.
          </li>
          <li>
            Lembre-se que <code>Row</code> e <code>Column</code> não têm rolagem. Se o conteúdo for maior que o espaço disponível, 
            você receberá um erro de overflow. Nesse caso, considere usar <code>ListView</code> ou <code>SingleChildScrollView</code>.
          </li>
        </ul>
      </div>
    </WidgetPage>
  );
};

export default RowColumnPage;
