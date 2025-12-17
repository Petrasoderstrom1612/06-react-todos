import useTheme from "../hooks/useTheme"
import Button from "react-bootstrap/Button";


const HomePage = () => {
	const {isDarkMode, toggleTheme} = useTheme()
	return (
		<>
			<h1>Welcome to Better Todos!</h1>

			{isDarkMode ? "Night" : "Day"}

			<p>Because when you're life is on fire 🔥, you need a todo list 📝.</p>

			<Button onClick={toggleTheme} variant="primary">toggle theme</Button>
		</>
	)
}

export default HomePage
