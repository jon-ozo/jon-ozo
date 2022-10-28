const Profile = () => {
    return (
        <section className='profile-section'>
            <figure>
                <img id='profile_img' src='images/corporate-man.png' alt='Profile Image' className='profile' />
            </figure>

            <div className='socials'>
                <i className="fa-brands fa-twitter fa-2x" id='twitter'></i> <small>- @jonnie_ozo</small>
                <i className="fa-brands fa-slack fa-2x" id='slack'></i> <small className='slack'>- jonnie</small>
            </div>
        </section>
        
    )
}

const Socials = () => {
    return (
        <section className='links'>

            <a href='https://training.zuri.team/' id='btn_zuri'>btn__zuri</a>
        
            <a href='http://books.zuri.team' id='books' title='Follow the link to find books about design and coding'>Books</a>
        
            <a href='https://books.zuri.team/python-for-beginners?ref_id=jonnie' id='book_python' title='Use this link to get royalties on the sale of python for beginners book'>book__python</a>
        
            <a href='https://background.zuri.team' id='pitch' title='We understand the steps to writing great code and the qualities needed to be a great coder. Follow this link to run accurate background checks on your coders'>Pitch</a>
        
            <a href='https://books.zuri.team/design-rules' id='book_design' title='Improve your design skills. Find out the rules design professionals follow to create magic'>book_design</a>
            
        </section>
    )
}

const App = () => {

    return (
        <main>
            <Profile />
            <Socials />
        </main>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
