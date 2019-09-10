import React, {useState} from 'react'
import { render } from 'react-dom'
import VerticalNavbarComponent from './lib/VerticalNavbarComponent'
import { createGlobalStyle } from 'styled-components'
import { MdPerson, MdSms, MdAccessTime, MdAirlineSeatFlat, MdWbSunny, MdFlare, MdLens, MdAccountBalance, MdAdjust, MdAcUnit, MdAllInclusive } from 'react-icons/md'
import { ThemeProvider } from 'styled-components'
import smallLogo from './lib/assets/img/redwall-logo-small.png'

const Reset = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

const App = () => {

  const [themeMode, setThemeMode] = useState('light')
  return (
		<ThemeProvider
			theme={{
				mode: themeMode
			}}
		>
			<>
				<Reset />
				<VerticalNavbarComponent
					items={[
						{
							icon: <MdFlare size="1.9em" />,
							name: 'Light',
							handler: () => setThemeMode('light')
						},
						{
							icon: <MdLens size="1.9em" />,
							name: 'Dark',
							handler: () => setThemeMode('dark')
						},
						{
							icon: <MdAccessTime size="1.9em" />,
							name: 'Time'
						},
						{
							icon: <MdAirlineSeatFlat size="1.9em" />,
							name: 'Seat'
						},
						{
							icon: <MdWbSunny size="1.9em" />,
							name: 'Sunny'
						},
						{
							icon: <MdAccountBalance size="1.9em" />,
							name: 'Balance'
						},
						{
							icon: <MdAdjust size="1.9em" />,
							name: 'Adjust'
						},
						{
							icon: <MdAcUnit size="1.9em" />,
							name: 'AcUnit'
						},
						{
							icon: <MdAllInclusive size="1.9em" />,
							name: 'All Inclusive'
						}
					]}
					appearance="default"
					logo={smallLogo}
				>
					<div style={{height: '5000px'}}>
            oi pessoal
          </div>
				</VerticalNavbarComponent>
			</>
		</ThemeProvider>
	)
}

render(<App />, document.getElementById('root'))
