import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ExplanationBlock from '../components/ExplanationBlock';
import WidgetPage from '../components/WidgetPage';

const ElevatedButtonPage: React.FC = () => {
  const elevatedButtonCode = `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Exemplo ElevatedButton',
      theme: ThemeData(
        primarySwatch: Colors.indigo,
        // Estilizando ElevatedButton globalmente no tema (opcional)
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            foregroundColor: Colors.white, // Cor do texto/ícone do botão
            backgroundColor: Colors.indigoAccent, // Cor de fundo do botão
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
            textStyle: const TextStyle(fontSize: 16),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8.0),
            ),
          ),
        ),
      ),
      home: const ElevatedButtonExampleScreen(),
    );
  }
}

// Usaremos StatefulWidget porque o estado (contador) mudará
class ElevatedButtonExampleScreen extends StatefulWidget {
  const ElevatedButtonExampleScreen({super.key});

  @override
  State<ElevatedButtonExampleScreen> createState() => _ElevatedButtonExampleScreenState();
}

class _ElevatedButtonExampleScreenState extends State<ElevatedButtonExampleScreen> {
  // Variável de estado para contar os cliques
  int _counter = 0;

  // Método para incrementar o contador e redesenhar a tela
  void _incrementCounter() {
    // setState notifica o Flutter que o estado mudou, causando a reconstrução do widget
    setState(() {
      _counter++;
    });
    print('Botão pressionado! Contador: $_counter');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Exemplos de ElevatedButton'),
        backgroundColor: Colors.indigo,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'Você pressionou o botão esta quantidade de vezes:',
              textAlign: TextAlign.center,
            ),
            Text(
              '$_counter',
              // Usando o estilo de texto do tema para destaque
              style: Theme.of(context).textTheme.headlineMedium,
            ),
            const SizedBox(height: 30),

            // Exemplo 1: ElevatedButton Básico
            ElevatedButton(
              // onPressed é OBRIGATÓRIO. Se for null, o botão fica desabilitado.
              // Chamamos nosso método que usa setState.
              onPressed: _incrementCounter,
              child: const Text('Pressione-me'),
            ),
            const SizedBox(height: 20),

            // Exemplo 2: ElevatedButton com Ícone
            ElevatedButton.icon(
              onPressed: _incrementCounter,
              icon: const Icon(Icons.add_circle_outline),
              label: const Text('Incrementar com Ícone'),
              // Estilização específica para este botão (sobrescreve o tema)
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.green, // Fundo verde
                padding: const EdgeInsets.symmetric(horizontal: 25, vertical: 15),
              ),
            ),
            const SizedBox(height: 20),

            // Exemplo 3: ElevatedButton Desabilitado
            ElevatedButton(
              onPressed: null, // Definir onPressed como null desabilita o botão
              child: const Text('Botão Desabilitado'),
            ),
          ],
        ),
      ),
    );
  }
}`;

  return (
    <WidgetPage 
      title="ElevatedButton e StatefulWidget" 
      description="O ElevatedButton é um botão Material Design com uma elevação (sombra) que aumenta quando pressionado. Frequentemente usado com StatefulWidget para criar interfaces interativas."
    >
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Código de Exemplo</h3>
      <CodeBlock code={elevatedButtonCode} />
      
      <ExplanationBlock title="O que é o ElevatedButton?">
        <p>
          O widget <code>ElevatedButton</code> é um botão Material Design com uma elevação (sombra) que aumenta quando pressionado. 
          É comumente usado para ações primárias na interface do usuário.
        </p>
        <p className="mt-2">
          A propriedade <code>onPressed</code> é crucial: ela recebe a função a ser executada quando o botão é clicado. 
          Se <code>onPressed</code> for <code>null</code>, o botão fica desabilitado visualmente e não responde a toques.
        </p>
      </ExplanationBlock>
      
      <ExplanationBlock title="O que é um StatefulWidget?">
        <p>
          Um <code>StatefulWidget</code> é um widget que pode mudar seu estado durante sua vida útil. 
          Diferente do <code>StatelessWidget</code>, que é imutável após ser construído, o <code>StatefulWidget</code> 
          pode ser reconstruído com novos valores quando seu estado interno muda.
        </p>
        <p className="mt-2">
          No exemplo, usamos <code>StatefulWidget</code> porque precisamos manter e atualizar um contador 
          (<code>_counter</code>) que muda cada vez que o botão é pressionado.
        </p>
        <p className="mt-2">
          O método <code>setState()</code> é fundamental: ele notifica o Flutter que o estado interno mudou, 
          causando a reconstrução do widget para refletir o novo estado.
        </p>
      </ExplanationBlock>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Propriedades Importantes do ElevatedButton</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-medium text-blue-600">onPressed</h4>
          <p>
            A função callback que é chamada quando o botão é pressionado. Se for <code>null</code>, o botão fica desabilitado.
          </p>
          <CodeBlock code={`onPressed: _incrementCounter,`} />
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">child</h4>
          <p>
            O widget filho que será exibido dentro do botão, geralmente um <code>Text</code>.
          </p>
          <CodeBlock code={`child: const Text('Pressione-me'),`} />
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">style</h4>
          <p>
            Define o estilo visual do botão, como cores, padding, forma, etc.
          </p>
          <CodeBlock code={`style: ElevatedButton.styleFrom(
  backgroundColor: Colors.green, // Fundo verde
  padding: const EdgeInsets.symmetric(horizontal: 25, vertical: 15),
),`} />
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Exemplos Explicados</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium text-blue-600">ElevatedButton Básico</h4>
          <CodeBlock code={`ElevatedButton(
  // onPressed é OBRIGATÓRIO. Se for null, o botão fica desabilitado.
  // Chamamos nosso método que usa setState.
  onPressed: _incrementCounter,
  child: const Text('Pressione-me'),
),`} />
          <p className="mt-2">
            Este é o uso mais básico do <code>ElevatedButton</code>:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><code>onPressed: _incrementCounter</code>: Define a função a ser chamada quando o botão é pressionado</li>
            <li><code>child: const Text('Pressione-me')</code>: Define o texto a ser exibido no botão</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">ElevatedButton com Ícone</h4>
          <CodeBlock code={`ElevatedButton.icon(
  onPressed: _incrementCounter,
  icon: const Icon(Icons.add_circle_outline),
  label: const Text('Incrementar com Ícone'),
  // Estilização específica para este botão (sobrescreve o tema)
  style: ElevatedButton.styleFrom(
    backgroundColor: Colors.green, // Fundo verde
    padding: const EdgeInsets.symmetric(horizontal: 25, vertical: 15),
  ),
),`} />
          <p className="mt-2">
            Este exemplo usa o construtor nomeado <code>ElevatedButton.icon</code> para criar um botão com ícone:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><code>icon: const Icon(Icons.add_circle_outline)</code>: Define o ícone a ser exibido antes do texto</li>
            <li><code>label: const Text('Incrementar com Ícone')</code>: Define o texto a ser exibido após o ícone</li>
            <li><code>style: ElevatedButton.styleFrom(...)</code>: Aplica um estilo personalizado a este botão específico, sobrescrevendo o estilo global definido no tema</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">ElevatedButton Desabilitado</h4>
          <CodeBlock code={`ElevatedButton(
  onPressed: null, // Definir onPressed como null desabilita o botão
  child: const Text('Botão Desabilitado'),
),`} />
          <p className="mt-2">
            Este exemplo mostra como desabilitar um botão:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><code>onPressed: null</code>: Ao definir <code>onPressed</code> como <code>null</code>, o botão fica desabilitado visualmente (geralmente acinzentado) e não responde a toques</li>
          </ul>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Entendendo o StatefulWidget</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-medium text-blue-600">Declaração do StatefulWidget</h4>
          <CodeBlock code={`class ElevatedButtonExampleScreen extends StatefulWidget {
  const ElevatedButtonExampleScreen({super.key});

  @override
  State<ElevatedButtonExampleScreen> createState() => _ElevatedButtonExampleScreenState();
}`} />
          <p className="mt-2">
            Um <code>StatefulWidget</code> é composto por duas classes:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>A classe do widget em si, que é imutável</li>
            <li>Uma classe <code>State</code> associada, que contém o estado mutável</li>
          </ul>
          <p className="mt-2">
            O método <code>createState()</code> é obrigatório e deve retornar uma instância da classe <code>State</code> associada.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Classe State</h4>
          <CodeBlock code={`class _ElevatedButtonExampleScreenState extends State<ElevatedButtonExampleScreen> {
  // Variável de estado para contar os cliques
  int _counter = 0;

  // Método para incrementar o contador e redesenhar a tela
  void _incrementCounter() {
    // setState notifica o Flutter que o estado mudou, causando a reconstrução do widget
    setState(() {
      _counter++;
    });
    print('Botão pressionado! Contador: $_counter');
  }

  @override
  Widget build(BuildContext context) {
    // ... (código da UI)
  }
}`} />
          <p className="mt-2">
            A classe <code>State</code> contém:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Variáveis de estado (<code>_counter</code>)</li>
            <li>Métodos para modificar o estado (<code>_incrementCounter</code>)</li>
            <li>O método <code>build</code> que descreve a UI com base no estado atual</li>
          </ul>
          <p className="mt-2">
            O método <code>setState()</code> é crucial: ele notifica o Flutter que o estado interno mudou, 
            causando a reconstrução do widget (chamada ao método <code>build</code>) para refletir o novo estado.
          </p>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="text-lg font-semibold text-yellow-800 mb-2">Dicas</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Use <code>ElevatedButton</code> para ações primárias que você quer destacar na interface.
          </li>
          <li>
            Sempre forneça um valor não-nulo para <code>onPressed</code>, a menos que você queira desabilitar o botão.
          </li>
          <li>
            Para botões menos destacados, considere usar <code>TextButton</code> ou <code>OutlinedButton</code>.
          </li>
          <li>
            Você pode estilizar todos os <code>ElevatedButton</code>s do seu aplicativo de uma vez usando <code>elevatedButtonTheme</code> no <code>ThemeData</code>.
          </li>
          <li>
            Lembre-se que qualquer código que modifica uma variável de estado <em>deve</em> estar dentro do callback de <code>setState</code>.
          </li>
        </ul>
      </div>
    </WidgetPage>
  );
};

export default ElevatedButtonPage;
