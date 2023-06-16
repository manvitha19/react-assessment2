import './App.css';
let username = "Rescuer! How are you doing today Sam"

const Greet = () => {
  let timeNow = new Date().getHours();
  return timeNow >= 5 && timeNow < 12
    ? <div>Good Morning {username} </div>
    : timeNow >= 12 && timeNow < 18
      ? <div>Good Afternoon {username} </div>
      : <div>Good evening {username} </div>;
}
export default function App() {
  return (
    <main className='h1' style={{
      fontSize: 72,
    }}>
      <Greet />
    </main>
  )
}