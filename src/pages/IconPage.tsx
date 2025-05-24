import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ExplanationBlock from '../components/ExplanationBlock';
import WidgetPage from '../components/WidgetPage';

const IconPage: React.FC = () => {
  const iconCode = `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Exemplo Icon Widget',
      theme: ThemeData(
        primarySwatch: Colors.indigo,
      ),
      home: const IconExampleScreen(),
    );
  }
}

class IconExampleScreen extends StatelessWidget {
  const IconExampleScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Exemplos de Icon Widget'),
        backgroundColor: Colors.indigo,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Wrap( // Usando Wrap para que os ícones quebrem a linha se não couberem
          spacing: 20.0, // Espaçamento horizontal entre os ícones
          runSpacing: 20.0, // Espaçamento vertical entre as linhas de ícones
          alignment: WrapAlignment.center, // Alinhamento dos ícones
          children: [
            // Exemplo 1: Ícone Básico
            Icon(
              Icons.favorite, // Ícone de coração da biblioteca Material Icons
              color: Colors.pink, // Cor do ícone
              size: 30.0, // Tamanho do ícone
              semanticLabel: 'Ícone de Favorito', // Descrição para acessibilidade
            ),

            // Exemplo 2: Ícone de Alarme com tamanho maior
            Icon(
              Icons.access_alarm,
              color: Colors.blueAccent,
              size: 48.0,
            ),

            // Exemplo 3: Ícone de Adicionar Círculo
            Icon(
              Icons.add_circle_outline,
              color: Colors.green,
              size: 30.0,
            ),

            // Exemplo 4: Ícone de Configurações
            Icon(
              Icons.settings,
              color: Colors.grey[700], // Tom de cinza
              size: 30.0,
            ),

            // Exemplo 5: Ícone de Casa
            Icon(
              Icons.home,
              color: Colors.orange,
              size: 40.0,
            ),

            // Exemplo 6: Ícone de Android
            Icon(
              Icons.android,
              color: Colors.lightGreen,
              size: 48.0,
            ),

             // Exemplo 7: Ícone dentro de um IconButton (tornando-o clicável)
            IconButton(
              icon: const Icon(Icons.volume_up), // Ícone de volume
              iconSize: 35.0,
              color: Colors.purple,
              tooltip: 'Aumentar Volume', // Dica que aparece ao segurar o botão
              onPressed: () {
                print('Botão de Volume pressionado!');
                // Adicione a lógica para aumentar o volume aqui
              },
            ),

             // Exemplo 8: Ícone de Informação dentro de um IconButton
            IconButton(
              icon: const Icon(Icons.info_outline),
              color: Colors.teal,
              tooltip: 'Mostrar Informações',
              onPressed: () {
                print('Botão de Informação pressionado!');
                // Adicione a lógica para mostrar informações aqui
              },
            ),
          ],
        ),
      ),
    );
  }
}`;

  return (
    <WidgetPage 
      title="Icon" 
      description="O widget Icon exibe um ícone gráfico. O Flutter vem com um conjunto de ícones pré-definidos na classe Icons (parte da biblioteca Material)."
    >
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Código de Exemplo</h3>
      <CodeBlock code={iconCode} />
      
      <ExplanationBlock title="O que é o widget Icon?">
        <p>
          O widget <code>Icon</code> é usado para exibir um ícone gráfico. O Flutter vem com um conjunto de ícones 
          pré-definidos na classe <code>Icons</code>, que faz parte da biblioteca Material Design.
        </p>
        <p className="mt-2">
          Os ícones são elementos visuais simples que ajudam a comunicar ações, estados e categorias de forma concisa 
          e reconhecível. Eles são frequentemente usados em botões, menus e outros elementos de interface.
        </p>
      </ExplanationBlock>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Propriedades Importantes</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-medium text-blue-600">icon</h4>
          <p>
            O primeiro parâmetro posicional do <code>Icon</code> é o <code>IconData</code>, que define qual ícone exibir. 
            A classe <code>Icons</code> contém constantes estáticas para todos os ícones Material Design incluídos no Flutter.
          </p>
          <p className="mt-1">
            Exemplos: <code>Icons.favorite</code>, <code>Icons.home</code>, <code>Icons.settings</code>, etc.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">color</h4>
          <p>
            Define a cor do ícone. Se não for especificada, o ícone usará a cor do tema atual 
            (geralmente <code>iconTheme.color</code> do tema).
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">size</h4>
          <p>
            Define o tamanho do ícone em pixels lógicos. Se não for especificado, o ícone usará o tamanho do tema atual 
            (geralmente <code>iconTheme.size</code> do tema).
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">semanticLabel</h4>
          <p>
            Fornece uma descrição textual do ícone, usada por ferramentas de acessibilidade (como leitores de tela).
            É importante para tornar seu aplicativo acessível a todos os usuários.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Exemplos Explicados</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium text-blue-600">Ícone Básico</h4>
          <CodeBlock code={`Icon(
  Icons.favorite, // Ícone de coração da biblioteca Material Icons
  color: Colors.pink, // Cor do ícone
  size: 30.0, // Tamanho do ícone
  semanticLabel: 'Ícone de Favorito', // Descrição para acessibilidade
),`} />
          <p className="mt-2">
            Este é um exemplo básico do widget <code>Icon</code>:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><code>Icons.favorite</code>: Define o ícone a ser exibido (um coração)</li>
            <li><code>color: Colors.pink</code>: Define a cor do ícone como rosa</li>
            <li><code>size: 30.0</code>: Define o tamanho do ícone como 30 pixels lógicos</li>
            <li><code>semanticLabel: 'Ícone de Favorito'</code>: Fornece uma descrição para acessibilidade</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Ícone dentro de um IconButton</h4>
          <CodeBlock code={`IconButton(
  icon: const Icon(Icons.volume_up), // Ícone de volume
  iconSize: 35.0,
  color: Colors.purple,
  tooltip: 'Aumentar Volume', // Dica que aparece ao segurar o botão
  onPressed: () {
    print('Botão de Volume pressionado!');
    // Adicione a lógica para aumentar o volume aqui
  },
),`} />
          <p className="mt-2">
            Este exemplo demonstra como tornar um ícone interativo usando <code>IconButton</code>:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><code>icon: const Icon(Icons.volume_up)</code>: Define o ícone a ser exibido no botão</li>
            <li><code>iconSize: 35.0</code>: Define o tamanho do ícone dentro do botão</li>
            <li><code>color: Colors.purple</code>: Define a cor do ícone</li>
            <li><code>tooltip: 'Aumentar Volume'</code>: Define um texto de dica que aparece quando o usuário pressiona e segura o botão</li>
            <li>A propriedade <code>onPressed</code> define a função a ser executada quando o botão for pressionado</li>
          </ul>
          <p className="mt-2">
            <strong>Importante:</strong> A propriedade <code>onPressed</code> é obrigatória para o <code>IconButton</code>. 
            Se for <code>null</code>, o botão será desabilitado visualmente e não reagirá a toques.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Usando Wrap para organizar ícones</h4>
          <CodeBlock code={`Wrap( // Usando Wrap para que os ícones quebrem a linha se não couberem
  spacing: 20.0, // Espaçamento horizontal entre os ícones
  runSpacing: 20.0, // Espaçamento vertical entre as linhas de ícones
  alignment: WrapAlignment.center, // Alinhamento dos ícones
  children: [
    // Vários ícones como filhos
  ],
),`} />
          <p className="mt-2">
            Este exemplo mostra como usar o widget <code>Wrap</code> para organizar vários ícones:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><code>Wrap</code> permite que os filhos quebrem para a próxima linha quando não há espaço suficiente</li>
            <li><code>spacing: 20.0</code>: Define o espaçamento horizontal entre os ícones</li>
            <li><code>runSpacing: 20.0</code>: Define o espaçamento vertical entre as linhas</li>
            <li><code>alignment: WrapAlignment.center</code>: Centraliza os ícones em cada linha</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="text-lg font-semibold text-yellow-800 mb-2">Dicas</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Para ver todos os ícones disponíveis na classe <code>Icons</code>, consulte a 
            <a href="https://api.flutter.dev/flutter/material/Icons-class.html" target="_blank" className="text-blue-600 hover:underline"> documentação oficial do Flutter</a>.
          </li>
          <li>
            Se você precisar de ícones personalizados, pode usar pacotes como <code>font_awesome_flutter</code> ou criar seus próprios 
            ícones usando fontes de ícones personalizadas.
          </li>
          <li>
            Para tornar um ícone clicável, envolva-o com <code>IconButton</code>, <code>InkWell</code> ou <code>GestureDetector</code>.
          </li>
          <li>
            Sempre forneça um <code>semanticLabel</code> para acessibilidade, especialmente para ícones que não têm texto associado.
          </li>
        </ul>
      </div>
    </WidgetPage>
  );
};

export default IconPage;
