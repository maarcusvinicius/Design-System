import { Envelope, Lock } from 'phosphor-react'

import { SignIn } from './pages/SignIn'

import { Heading } from './components/Heading'
import { Checkbox } from './components/Checkbox'
import { TextInput } from './components/TextInput'
import { Text } from './components/Text'
import { Button } from './components/Button'

import { Logo } from './Logo'
import './styles/global.css'

export function App() {
  return (
    <SignIn />
  )
}