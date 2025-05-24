import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ScaffoldAppBarPage from './pages/ScaffoldAppBarPage';
import TextRichTextPage from './pages/TextRichTextPage';
import ContainerPage from './pages/ContainerPage';
import RowColumnPage from './pages/RowColumnPage';
import ImagePage from './pages/ImagePage';
import IconPage from './pages/IconPage';
import ElevatedButtonPage from './pages/ElevatedButtonPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <Navigation />
        <main className="flex-grow py-6">
          <Routes>
            <Route path="/" element={
              <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold text-blue-700 mb-4">Bem-vindo ao Flutter Widgets Essenciais</h2>
                  <p className="text-gray-700 mb-4">
                    Este site contém exemplos detalhados e explicações dos widgets mais importantes do Flutter para iniciantes.
                    Cada seção aborda um widget específico com código completo e análise linha por linha.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Navegue pelo menu acima para explorar os diferentes widgets e seus exemplos.
                  </p>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link to="/scaffold-appbar" className="block">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">Scaffold e AppBar</h3>
                        <p className="text-sm text-gray-600">A estrutura básica de layout visual do Material Design e a barra de aplicativos.</p>
                      </div>
                    </Link>
                    
                    <Link to="/text-richtext" className="block">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">Text e RichText</h3>
                        <p className="text-sm text-gray-600">Widgets para exibir texto com estilo único ou múltiplos estilos.</p>
                      </div>
                    </Link>
                    
                    <Link to="/container" className="block">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">Container</h3>
                        <p className="text-sm text-gray-600">Widget versátil para pintura, posicionamento e dimensionamento.</p>
                      </div>
                    </Link>
                    
                    <Link to="/row-column" className="block">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">Row e Column</h3>
                        <p className="text-sm text-gray-600">Widgets para organizar filhos em layouts lineares horizontais e verticais.</p>
                      </div>
                    </Link>
                    
                    <Link to="/image" className="block">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">Image</h3>
                        <p className="text-sm text-gray-600">Widget para exibir imagens de diferentes fontes.</p>
                      </div>
                    </Link>
                    
                    <Link to="/icon" className="block">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">Icon</h3>
                        <p className="text-sm text-gray-600">Widget para exibir ícones gráficos.</p>
                      </div>
                    </Link>
                    
                    <Link to="/elevated-button" className="block">
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors">
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">ElevatedButton</h3>
                        <p className="text-sm text-gray-600">Widget para botões interativos com elevação.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            } />
            <Route path="/scaffold-appbar" element={<ScaffoldAppBarPage />} />
            <Route path="/text-richtext" element={<TextRichTextPage />} />
            <Route path="/container" element={<ContainerPage />} />
            <Route path="/row-column" element={<RowColumnPage />} />
            <Route path="/image" element={<ImagePage />} />
            <Route path="/icon" element={<IconPage />} />
            <Route path="/elevated-button" element={<ElevatedButtonPage />} />
          </Routes>
        </main>
        <footer className="bg-blue-800 text-white py-4 mt-8">
          <div className="container mx-auto px-4 text-center">
            <p>Flutter Widgets Essenciais - Um guia completo para iniciantes</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
