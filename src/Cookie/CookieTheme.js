export default function setTheme(theme){
    localStorage.setItem('theme', theme);
}

export function getTheme(){
    return localStorage.getItem('theme');
}