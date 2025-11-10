import '../styles/Settings.css'

export default function Settings(){
    return (
        <main>
            <h1>Settings</h1>
            <div className="settingsContainer">
                <div className='settingsNav'></div>
                <div className='settingsContent'>
                    <h2>Profile change</h2>
                    <div className='profileImage'>
                        <button>Change photo</button>
                    </div>
                </div>
            </div>
        </main>
    )
}