
function Home({name, user}){

    return(
        <div>
             <h1 className="title">Studio<strong>Ghibli</strong>Database</h1>
             <p>Welcome, {user.name}!</p>
             <img className = "homephoto" src="https://external-preview.redd.it/C5mMXJYSqEmZ9y7TCDpwlVCWqIWEWhb0F3WAlA12414.jpg?auto=webp&s=1d686f2ddca456481b5f285e68a50c6389ed3c37" alt="home"/>
        </div>
 
    )
}

export default Home;