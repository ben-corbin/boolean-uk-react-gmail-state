import Header from './components/header'

import initialEmails from './data/emails'

import './styles/app.css'

import {useState} from 'react'

function App() {
  const [inbox, setInbox] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)

  const toggleReadEmails = (target) => {
    setInbox(inbox.map((email) => {
        if (email === target) {
          return {...email, read: !email.read}
        }
        return email
      })
    )
  }

  const toggleStarredEmails = (target) => {
    setInbox(inbox.map((email) => {
        if (email === target) {
          return {...email, starred: !email.starred}
        }
        return email
      })
    )
  }

  const unreadEmails = inbox.filter(emails => !emails.read)
  const readEmails = inbox.filter(emails => emails.read)
  const starredEmails = inbox.filter(emails => emails.starred)
  
  
  let hideReadEmails 
    if (hideRead) {
    hideReadEmails = inbox.filter(emails => !emails.read)
    } else {
      hideReadEmails = inbox
    }
  
  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={(event) => setHideRead(event.target.checked)}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {hideReadEmails.map(email =>  {

      //  how to apply the read or unread CSS 
      // let emailClass = 'email'
      // if (email.read) { emailClass += ' read' }
      // else { emailClass += ' unread' }
      // or you can use the ternary operator to apply the styles as below

            return (
            <li className={`email ${email.read ? 'read' : 'unread'}`}>
  <div className="select">
	<input
	  className="select-checkbox"
	  type="checkbox"
    onChange={() => toggleReadEmails(email)}
    checked={email.read}
    />
  </div>
  <div className="star">
	<input
	  className="star-checkbox"
	  type="checkbox"
    onChange={() => toggleStarredEmails(email)}
    checked={email.starred}
	/>
  </div>
  <div className="sender">{email.sender}</div>
  <div className="title">{email.title}</div>
</li>)
          })}
        </ul>
      </main>
      
    </div>
  )
}

export default App
