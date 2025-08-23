import ThemeProvider from "@/components/App/ThemeProvider";
import Header from "@components/Header";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <h1>This is a heading</h1>
    </ThemeProvider>
  );
}

export default App;
