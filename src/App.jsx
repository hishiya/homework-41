import { Suspense } from 'react';
import MessageComponent from './components/MessageComponent';

const fetchMessage = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Привіт, дані успішно отримано!");
    }, 2000);
  });
};

const messagePromise = fetchMessage();

function App() {
  return (
    <div>
      <Suspense fallback={<h2> Завантаження даних...</h2>}>
        <MessageComponent messagePromise={messagePromise} />
      </Suspense>
    </div>
  );
}

export default App;