import React from 'react';
import CodeBlock from '../components/CodeBlock';
import ExplanationBlock from '../components/ExplanationBlock';
import WidgetPage from '../components/WidgetPage';

const ImagePage: React.FC = () => {
  const imageCode = `import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Exemplo Image Widget',
      theme: ThemeData(
        primarySwatch: Colors.purple,
      ),
      home: const ImageExampleScreen(),
    );
  }
}

class ImageExampleScreen extends StatelessWidget {
  const ImageExampleScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Exemplos de Image Widget'),
        backgroundColor: Colors.purple,
      ),
      body: ListView(
        padding: const EdgeInsets.all(16.0),
        children: [
          // Exemplo 1: Image.network - Carrega uma imagem da internet
          const Text(
            'Image.network - Imagem da Internet',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
          ),
          const SizedBox(height: 8),
          // Carregando uma imagem da internet
          Image.network(
            'https://flutter.github.io/assets-for-api-docs/assets/widgets/owl.jpg',
            // Altura fixa para a imagem
            height: 200,
            // Como a imagem deve ser inscrita no espaço disponível
            fit: BoxFit.cover,
            // Widget a ser mostrado durante o carregamento
            loadingBuilder: (context, child, loadingProgress) {
              if (loadingProgress == null) {
                return child; // Imagem totalmente carregada
              }
              return Center(
                child: CircularProgressIndicator(
                  // Mostra o progresso de carregamento, se disponível
                  value: loadingProgress.expectedTotalBytes != null
                      ? loadingProgress.cumulativeBytesLoaded /
                          loadingProgress.expectedTotalBytes!
                      : null,
                ),
              );
            },
            // Widget a ser mostrado em caso de erro
            errorBuilder: (context, error, stackTrace) {
              return Container(
                height: 200,
                color: Colors.red.shade100,
                child: const Center(
                  child: Text(
                    'Erro ao carregar a imagem',
                    style: TextStyle(color: Colors.red),
                  ),
                ),
              );
            },
          ),
          const SizedBox(height: 20),

          // Exemplo 2: Image.asset - Carrega uma imagem do pacote do aplicativo
          const Text(
            'Image.asset - Imagem Local (do pacote do aplicativo)',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
          ),
          const SizedBox(height: 8),
          const Text(
            'Nota: Para usar Image.asset, você precisa configurar o pubspec.yaml:',
            style: TextStyle(fontStyle: FontStyle.italic),
          ),
          Container(
            margin: const EdgeInsets.symmetric(vertical: 8),
            padding: const EdgeInsets.all(8),
            color: Colors.grey.shade200,
            child: const Text(
              '''
flutter:
  assets:
    - assets/images/
''',
              style: TextStyle(fontFamily: 'monospace'),
            ),
          ),
          // Carregando uma imagem do pacote do aplicativo
          // Nota: Esta imagem não existe neste exemplo, então mostraria um erro
          // em um aplicativo real. Você precisaria adicionar a imagem ao seu projeto.
          Image.asset(
            'assets/images/flutter_logo.png',
            height: 150,
            // Repetir a imagem horizontalmente
            repeat: ImageRepeat.repeatX,
          ),
          const SizedBox(height: 20),

          // Exemplo 3: Image com BoxDecoration (em um Container)
          const Text(
            'Image como Decoração de Container',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
          ),
          const SizedBox(height: 8),
          Container(
            height: 200,
            width: double.infinity,
            decoration: BoxDecoration(
              // Imagem de fundo
              image: const DecorationImage(
                image: NetworkImage(
                  'https://flutter.github.io/assets-for-api-docs/assets/widgets/owl-2.jpg',
                ),
                fit: BoxFit.cover,
              ),
              // Borda arredondada
              borderRadius: BorderRadius.circular(12),
              // Sombra
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.3),
                  spreadRadius: 2,
                  blurRadius: 5,
                  offset: const Offset(0, 3),
                ),
              ],
            ),
            // Conteúdo sobreposto à imagem
            child: Center(
              child: Container(
                padding: const EdgeInsets.symmetric(
                  horizontal: 16,
                  vertical: 8,
                ),
                decoration: BoxDecoration(
                  color: Colors.black.withOpacity(0.6),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: const Text(
                  'Texto sobre a imagem',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
          ),
          const SizedBox(height: 20),

          // Exemplo 4: ClipRRect para imagem com cantos arredondados
          const Text(
            'Imagem com Cantos Arredondados (ClipRRect)',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
          ),
          const SizedBox(height: 8),
          ClipRRect(
            // Borda arredondada para a imagem
            borderRadius: BorderRadius.circular(20),
            child: Image.network(
              'https://flutter.github.io/assets-for-api-docs/assets/widgets/puffin.jpg',
              height: 200,
              width: double.infinity,
              fit: BoxFit.cover,
            ),
          ),
          const SizedBox(height: 20),

          // Exemplo 5: FadeInImage para transição suave
          const Text(
            'FadeInImage - Transição Suave ao Carregar',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
          ),
          const SizedBox(height: 8),
          // FadeInImage mostra um placeholder enquanto a imagem carrega
          // e faz uma transição suave quando a imagem estiver pronta
          FadeInImage.assetNetwork(
            // Imagem placeholder (deve estar no pubspec.yaml)
            // Aqui usamos uma imagem da rede como exemplo
            placeholder: 'https://via.placeholder.com/400x200?text=Carregando...',
            // Imagem final
            image: 'https://flutter.github.io/assets-for-api-docs/assets/widgets/falcon.jpg',
            height: 200,
            fit: BoxFit.cover,
            // Duração da animação de fade
            fadeInDuration: const Duration(milliseconds: 500),
          ),
          const SizedBox(height: 20),

          // Exemplo 6: Image com ColorFilter
          const Text(
            'Image com ColorFilter',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16),
          ),
          const SizedBox(height: 8),
          ColorFiltered(
            // Aplica um filtro de cor à imagem
            colorFilter: const ColorFilter.mode(
              Colors.purple, // Cor a ser aplicada
              BlendMode.colorBurn, // Modo de mesclagem
            ),
            child: Image.network(
              'https://flutter.github.io/assets-for-api-docs/assets/widgets/owl.jpg',
              height: 200,
              fit: BoxFit.cover,
            ),
          ),
        ],
      ),
    );
  }
}`;

  return (
    <WidgetPage 
      title="Image" 
      description="O widget Image é usado para exibir imagens de diferentes fontes, como rede, assets locais, arquivos ou memória."
    >
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Código de Exemplo</h3>
      <CodeBlock code={imageCode} />
      
      <ExplanationBlock title="O que é o widget Image?">
        <p>
          O widget <code>Image</code> é usado para exibir imagens em um aplicativo Flutter. 
          Ele suporta vários formatos de imagem (JPEG, PNG, GIF, WebP, BMP, WBMP) e pode carregar imagens de diferentes fontes:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li><code>Image.network</code>: Carrega uma imagem da internet usando uma URL</li>
          <li><code>Image.asset</code>: Carrega uma imagem do pacote do aplicativo (definida no pubspec.yaml)</li>
          <li><code>Image.file</code>: Carrega uma imagem de um arquivo no dispositivo</li>
          <li><code>Image.memory</code>: Carrega uma imagem de um array de bytes na memória</li>
        </ul>
      </ExplanationBlock>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Propriedades Importantes</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-medium text-blue-600">fit</h4>
          <p>
            A propriedade <code>fit</code> controla como a imagem deve ser inscrita no espaço disponível:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><code>BoxFit.fill</code>: Estica a imagem para preencher o espaço (pode distorcer)</li>
            <li><code>BoxFit.contain</code>: Redimensiona a imagem para caber completamente, mantendo a proporção</li>
            <li><code>BoxFit.cover</code>: Redimensiona a imagem para cobrir todo o espaço, mantendo a proporção (pode cortar)</li>
            <li><code>BoxFit.fitWidth</code>: Redimensiona a imagem para caber na largura (pode cortar verticalmente)</li>
            <li><code>BoxFit.fitHeight</code>: Redimensiona a imagem para caber na altura (pode cortar horizontalmente)</li>
            <li><code>BoxFit.none</code>: Mantém o tamanho original da imagem</li>
            <li><code>BoxFit.scaleDown</code>: Exibe a imagem em seu tamanho original ou menor, se necessário</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">width e height</h4>
          <p>
            Definem as dimensões do widget <code>Image</code>. Se apenas uma dimensão for especificada, 
            a outra será calculada automaticamente para manter a proporção da imagem.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">loadingBuilder e errorBuilder</h4>
          <p>
            Callbacks que permitem personalizar o que é exibido durante o carregamento da imagem ou em caso de erro:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><code>loadingBuilder</code>: Constrói um widget durante o carregamento da imagem</li>
            <li><code>errorBuilder</code>: Constrói um widget quando ocorre um erro ao carregar a imagem</li>
          </ul>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-blue-700 mt-8 mb-4">Exemplos Explicados</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-medium text-blue-600">Image.network - Imagem da Internet</h4>
          <CodeBlock code={`Image.network(
  'https://flutter.github.io/assets-for-api-docs/assets/widgets/owl.jpg',
  // Altura fixa para a imagem
  height: 200,
  // Como a imagem deve ser inscrita no espaço disponível
  fit: BoxFit.cover,
  // Widget a ser mostrado durante o carregamento
  loadingBuilder: (context, child, loadingProgress) {
    if (loadingProgress == null) {
      return child; // Imagem totalmente carregada
    }
    return Center(
      child: CircularProgressIndicator(
        // Mostra o progresso de carregamento, se disponível
        value: loadingProgress.expectedTotalBytes != null
            ? loadingProgress.cumulativeBytesLoaded /
                loadingProgress.expectedTotalBytes!
            : null,
      ),
    );
  },
  // Widget a ser mostrado em caso de erro
  errorBuilder: (context, error, stackTrace) {
    return Container(
      height: 200,
      color: Colors.red.shade100,
      child: const Center(
        child: Text(
          'Erro ao carregar a imagem',
          style: TextStyle(color: Colors.red),
        ),
      ),
    );
  },
),`} />
          <p className="mt-2">
            Este exemplo demonstra como carregar uma imagem da internet usando <code>Image.network</code>:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>A URL da imagem é o primeiro parâmetro</li>
            <li><code>height: 200</code> define a altura da imagem</li>
            <li><code>fit: BoxFit.cover</code> faz com que a imagem cubra todo o espaço disponível, mantendo a proporção</li>
            <li><code>loadingBuilder</code> personaliza o que é exibido durante o carregamento (um indicador de progresso)</li>
            <li><code>errorBuilder</code> personaliza o que é exibido em caso de erro (um container vermelho com mensagem)</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Image.asset - Imagem Local</h4>
          <CodeBlock code={`Image.asset(
  'assets/images/flutter_logo.png',
  height: 150,
  // Repetir a imagem horizontalmente
  repeat: ImageRepeat.repeatX,
),`} />
          <p className="mt-2">
            Este exemplo mostra como carregar uma imagem do pacote do aplicativo usando <code>Image.asset</code>:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li>O caminho da imagem é relativo à configuração de assets no pubspec.yaml</li>
            <li><code>repeat: ImageRepeat.repeatX</code> faz com que a imagem seja repetida horizontalmente</li>
          </ul>
          <p className="mt-2 text-red-600">
            <strong>Importante:</strong> Para usar <code>Image.asset</code>, você precisa configurar o pubspec.yaml:
          </p>
          <pre className="bg-gray-100 p-2 rounded mt-1 text-sm">
{`flutter:
  assets:
    - assets/images/`}
          </pre>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">Imagem com Cantos Arredondados</h4>
          <CodeBlock code={`ClipRRect(
  // Borda arredondada para a imagem
  borderRadius: BorderRadius.circular(20),
  child: Image.network(
    'https://flutter.github.io/assets-for-api-docs/assets/widgets/puffin.jpg',
    height: 200,
    width: double.infinity,
    fit: BoxFit.cover,
  ),
),`} />
          <p className="mt-2">
            Este exemplo demonstra como criar uma imagem com cantos arredondados usando <code>ClipRRect</code>:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><code>ClipRRect</code> recorta seu filho com um retângulo de cantos arredondados</li>
            <li><code>borderRadius: BorderRadius.circular(20)</code> define o raio dos cantos</li>
            <li>A imagem dentro do <code>ClipRRect</code> será recortada para ter cantos arredondados</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-medium text-blue-600">FadeInImage - Transição Suave</h4>
          <CodeBlock code={`FadeInImage.assetNetwork(
  // Imagem placeholder (deve estar no pubspec.yaml)
  // Aqui usamos uma imagem da rede como exemplo
  placeholder: 'https://via.placeholder.com/400x200?text=Carregando...',
  // Imagem final
  image: 'https://flutter.github.io/assets-for-api-docs/assets/widgets/falcon.jpg',
  height: 200,
  fit: BoxFit.cover,
  // Duração da animação de fade
  fadeInDuration: const Duration(milliseconds: 500),
),`} />
          <p className="mt-2">
            Este exemplo mostra como usar <code>FadeInImage</code> para uma transição suave entre um placeholder e a imagem final:
          </p>
          <ul className="list-disc pl-6 mt-1 space-y-1">
            <li><code>FadeInImage</code> exibe um placeholder enquanto a imagem principal carrega</li>
            <li>Quando a imagem principal estiver pronta, ela faz uma transição suave (fade) do placeholder para a imagem</li>
            <li><code>fadeInDuration</code> controla a duração da animação de fade</li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h4 className="text-lg font-semibold text-yellow-800 mb-2">Dicas</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Use <code>Image.network</code> para imagens da internet, mas lembre-se de tratar o carregamento e possíveis erros.
          </li>
          <li>
            Para imagens locais, use <code>Image.asset</code> e não esqueça de configurar o pubspec.yaml.
          </li>
          <li>
            <code>BoxFit.cover</code> é frequentemente usado para imagens de fundo ou thumbnails, pois garante que todo o espaço seja preenchido.
          </li>
          <li>
            Para melhorar a experiência do usuário, sempre use placeholders ou indicadores de carregamento.
          </li>
          <li>
            Considere usar pacotes como <code>cached_network_image</code> para cache automático de imagens da internet.
          </li>
        </ul>
      </div>
    </WidgetPage>
  );
};

export default ImagePage;
