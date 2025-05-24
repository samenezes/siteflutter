import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ExplanationBlock from '../components/ExplanationBlock';
import WidgetPage from '../components/WidgetPage';

const ScaffoldAppBarPage: React.FC = () => {
  const scaffoldAppBarCode = `import 'package:flutter/material.dart';

// Função principal que inicia a execução do aplicativo Flutter.
void main() {
  // runApp infla o widget fornecido e o anexa à tela.
  runApp(const MyApp());
}

// O widget raiz do aplicativo. Geralmente é um StatelessWidget
// pois contém configurações globais como o tema, mas não muda.
class MyApp extends StatelessWidget {
  // Construtor constante para otimização.
  const MyApp({super.key});

  // O método build descreve como exibir o widget em termos de outros widgets de nível inferior.
  @override
  Widget build(BuildContext context) {
    // MaterialApp é um widget de conveniência que envolve vários widgets
    // comumente necessários para aplicativos Material Design.
    return MaterialApp(
      // Título do aplicativo, usado pelo sistema operacional (ex: gerenciador de tarefas).
      title: 'Exemplo Scaffold e AppBar',
      // Define o tema visual do aplicativo.
      theme: ThemeData(
        // Define a paleta de cores primárias.
        primarySwatch: Colors.blue,
      ),
      // A tela inicial (rota '/') do aplicativo.
      home: const MyHomePage(),
    );
  }
}

// A tela principal do nosso aplicativo.
class MyHomePage extends StatelessWidget {
  // Construtor constante.
  const MyHomePage({super.key});

  @override
  Widget build(BuildContext context) {
    // Scaffold implementa a estrutura básica de layout visual do Material Design.
    // Ele fornece APIs para mostrar drawers, snack bars, bottom sheets, etc.
    return Scaffold(
      // AppBar é exibida na parte superior do Scaffold.
      appBar: AppBar(
        // O título exibido na AppBar. Geralmente um widget Text.
        title: const Text('Meu App com Scaffold'),
        // Define a cor de fundo da AppBar.
        backgroundColor: Colors.deepPurple,
        // Lista de widgets a serem exibidos após o título (geralmente ícones de ação).
        actions: [
          IconButton(
            icon: const Icon(Icons.search),
            tooltip: 'Pesquisar',
            onPressed: () {
              // Ação a ser executada ao clicar no ícone de pesquisa.
              print('Ícone de pesquisa pressionado!');
            },
          ),
        ],
        // Widget a ser exibido antes do título (geralmente ícone de menu ou voltar).
        leading: IconButton(
          icon: const Icon(Icons.menu),
          tooltip: 'Menu',
          onPressed: () {
            // Ação a ser executada ao clicar no ícone de menu.
            print('Ícone de menu pressionado!');
          },
        ),
      ),
      // O corpo principal do Scaffold, onde o conteúdo da tela é exibido.
      // Aqui, estamos apenas centralizando um texto simples.
      body: const Center(
        child: Text(
          'Conteúdo da Tela Principal',
          style: TextStyle(fontSize: 24),
        ),
      ),
    );
  }
}`;

  return (
    <WidgetPage 
      title="Scaffold e AppBar" 
      description="O Scaffold fornece a estrutura básica de layout visual do Material Design, enquanto a AppBar é a barra de aplicativos exibida no topo."
    >
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Código de Exemplo</h3>
      <CodeBlock code={scaffoldAppBarCode} />
      
      <ExplanationBlock title="O que é o Scaffold?">
        <p>
          O widget <code>Scaffold</code> implementa a estrutura básica de layout visual do Material Design. 
          Ele fornece slots dedicados para os elementos mais comuns de uma interface de usuário, como:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>AppBar (barra superior)</li>
          <li>Drawer (menu lateral)</li>
          <li>BottomNavigationBar (barra de navegação inferior)</li>
          <li>FloatingActionButton (botão de ação flutuante)</li>
          <li>SnackBar (notificações temporárias)</li>
        </ul>
      </ExplanationBlock>
      
      <ExplanationBlock title="O que é a AppBar?">
        <p>
          A <code>AppBar</code> é um widget que aparece tipicamente no topo de um <code>Scaffold</code>. 
          Ela pode conter um título, ações (geralmente ícones), um widget leading (geralmente um ícone de menu ou voltar), 
          e outros elementos de UI.
        </p>
        <p className="mt-2">
          A AppBar é uma parte fundamental da navegação e identidade visual do seu aplicativo, 
          seguindo as diretrizes do Material Design.
        </p>
      </ExplanationBlock>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Explicação Detalhada</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-medium text-blue-600">Importação</h4>
          <p>
            <code>import 'package:flutter/material.dart';</code> - Esta linha importa a biblioteca principal do Flutter 
            para Material Design, que contém widgets como <code>Scaffold</code>, <code>AppBar</code>, <code>Text</code>, etc.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Função main()</h4>
          <p>
            <code>void main() {'{'} runApp(const MyApp()); {'}'}</code> - Esta é a função de entrada do aplicativo. 
            A função <code>runApp()</code> infla o widget fornecido e o anexa à tela.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Widget MyApp</h4>
          <p>
            <code>class MyApp extends StatelessWidget {'{'} ... {'}'}</code> - Esta classe define o widget raiz do aplicativo. 
            É um <code>StatelessWidget</code> porque contém configurações globais que não mudam durante a execução.
          </p>
          <p className="mt-1">
            O método <code>build</code> retorna um <code>MaterialApp</code>, que configura o tema e a tela inicial.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Widget MyHomePage</h4>
          <p>
            <code>class MyHomePage extends StatelessWidget {'{'} ... {'}'}</code> - Esta classe define a tela principal do aplicativo.
          </p>
          <p className="mt-1">
            O método <code>build</code> retorna um <code>Scaffold</code> com:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>Uma <code>AppBar</code> com título, cor de fundo, ações e um widget leading</li>
            <li>Um <code>body</code> contendo um texto centralizado</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="text-lg font-semibold text-yellow-800 mb-2">Dica</h4>
        <p>
          O <code>Scaffold</code> é geralmente o widget raiz de cada tela em um aplicativo Flutter. 
          Ele fornece a estrutura visual básica e garante que seu aplicativo siga as diretrizes do Material Design.
        </p>
      </div>
    </WidgetPage>
  );
};

export default ScaffoldAppBarPage;
