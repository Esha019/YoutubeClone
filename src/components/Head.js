import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestion, setShowSuggestion] = useState(false);

	const searchCache = useSelector((store) => store.search);
	const dispatch = useDispatch();

useEffect(() => {
	const timer = setTimeout(() => {
		if(searchCache[searchQuery]) {
			setSuggestions(searchCache[searchQuery]);
	}else{
			getSearchSuggestions();
	}
}, 200);

return() => {
	clearTimeout(timer);
};
}, [searchQuery]);

const getSearchSuggestions = async () =>{
	const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
	const json = await data.json();
	setSuggestions(json[1]);

	dispatch(cacheResults({
		[searchQuery] : json[1],
}));
}

	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
}

	return (
		<div className='grid grid-flow-col p-3 m-2 shadow-lg'>
			<div className='flex col-span-1'>
			<img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' alt="menu" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACNCAMAAAC9gAmXAAAAQlBMVEX///8AAADZ2dmIiIgdHR22trb8/Pw2NjZkZGQqKiqOjo7w8PCUlJTq6uq6urrHx8eenp5sbGzNzc1JSUni4uIiIiJj+8v6AAAA/ElEQVR4nO3aSQ7CMBAF0TSQeZ7uf1USIcQK5W/cakS9E5RiO1GszjIAAAAAAICPpbun1S1yS79aemuvxbSlQ4xZ2Uo1lUuMWaXEbLtTzb4JNYNTjNkg1ORuNblQM7rVjEJN4XOkjkNVCDVuS6Us1GFyiZm0mGPrVOUjrbJSNs1bf0tL/CwAAAAAwLV2zNMataukU9HUyf8060b6Cz9i5uQtp1nLaVxizBolpk2/TC+1sne4afuVZxNr38Q6U8HeN7HexVms7xQAAAAAXIg0KxBqjiLUjEmo+ZtYs0mx5ra4afsu1ixkrDnRYDO0seaLs1iz1wAAAAAA4B88AcZJHHLRmj1bAAAAAElFTkSuQmCC"/>
			<img className='h-8 ml-5' alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Logo_of_YouTube_%282005-2006%29.svg/2560px-Logo_of_YouTube_%282005-2006%29.svg.png"/>
		</div>
		<div className='col-span-10 px-10'>
			<div className='flex'>
			<input className='py-2 w-1/2 border border-gray-400 p-2 rounded-l-full' value={searchQuery} 
				onFocus={() => setShowSuggestion(true)}
				onBlur={() => setShowSuggestion(false)} 
				onChange={(e) => setSearchQuery(e.target.value)} type='text'/>
			<button><img 
              className='h-[39px] py-2 px-5 border rounded-e-full hover:bg-gray-200 shadow-lg bg-gray-100'
              alt="search"
              src="https://pixlok.com/wp-content/uploads/2021/10/search-0nvd-300x300.png"
            /></button>
		</div>
		{showSuggestion && (
			<div className='fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded'>
			<ul>
				{suggestions.map((sug, index) => (
					<li key={index} className='py-5 shadow-sm hover:bg-gray-100'>{sug}</li>
					))}
			</ul>
		</div>
		)}
		
		</div>
		<div className='col-span-1'>
			<img className='h-8 cursor-pointer' alt='user' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAY1BMVEX///8AAAD4+Phqamr09PSLi4s/Pz/u7u7j4+P7+/tgYGASEhLZ2dkGBgbm5uZ+fn65ublVVVUdHR2srKxzc3PKysqTk5NOTk6ysrIyMjI5OTmFhYXS0tIsLCzBwcFERESgoKDmukIgAAAFP0lEQVR4nO1baXeqMBQkgBIWRRaXImr//6980p62hNwkcyG2nvOcry2ckdxl7pIgeOGFF/4bpGF8R5j+GYHtvjmUUVYd76iyqDw0++3vMpC7VSVIVKud/BUKyf68zmkOn8jX533yYBLFam2j8IX1qngch7gxHAV5PE38EBLyYD0L4nQO/s0kWdU8EgPqlV8jiQ98Dp84+DuatGEexxh54ym0yWw+iQGZFxM5LSMx4LSYRBItZyFEtNBUizcfLIR4WxTOdhs/LITY7OazOPsiMeA8k0RY+mQhRBnOotH6ZSFEO4cFI42hqNgkQu/fYkDLPRev1vkDpp2uHsNCiBWHxe5RLIRgxI/CW9TSsYHjaeIpgtN4Q/OLl2xmRoSx8JDZ7YDyvnw0CyEAHZQu1FoIMrcubLjv3OQ527EaF4uYo37r9l4+3+NzeC+rW04Bkbv0OqMSyK7Ky+Ir4zgPdhYJTqLXn+5xIvbggeaS3OB0J/RMrblFggdcGRsqW1Cm1DanBS2jsjhcCvKwWAfoJo5ojOUCi7NgMSNzSKgQM1Rz7MC+pzNDYu5mFKYF9DigWzDVZBIekLdCaRoyD4PPJlB3jYhaOnrkTWv6dPfIs6BmgT7HnnwUqgnoR+f9JLpa6IAnNxiLIEByf0c9KJHYBZehSNGXUwEd8jKnXvkCFAkp34fcFTQN0Dgol0VCqDUvKoByNRVIEfoXuCIPL8j79Oe2yGNvcKs1hSo/XbZAh+mbhm5qkGlf4A54DB2K7niQ8KrhadoWkpO6BIPafhsosQ3ooRKq1J7DpBvc/cbqcS1RgqWr12BOFLMhJgBrlAZWaVTTOBQfoefEFWNxxd52nHoeSsOn7FlAwyhkFWDiegkNyEjRFrNGAzRR4bFAEISJ4r0mZ4uE0arRu094F9LVuWJ0z3SDZ8xwvJTSH9CDOWfubDVTzgRET22sDmBmtI+Y1c/UEz0ke75RG/xlx1so0GUPJAJHaAl1LLkjKUK+MN9wJzL5LXv+XIz4njNGfJt212/jNI23/a6dMYOhCoR5c6380t1u3WXeZgVVLj1wsGUCZedQKe0VZCkdQM2eAZd1Z5T/l24NlQYD1hQLdPRa9jJOJO0W7V4msezBxEC3WbAi/LthFTY39U+35jttJwvaA0ALTo1ZYfEeHbtLXV+6Y/ReKNoBiGSGFpzTZWtCD6fJVsptQuT+qyuum4YIDgUZMef8oSPjG1WtNZDC/aYfWLO2eYvC9hhYoKiwlSvmn2UWkXM3lcybUjZJa5JgJqN2w+h+tqGfoXGGtzV0GBod9mYe6bN4/48C/dPs6yTkRAburdAgxwmOUyasY8H+2icICeEYBxPOotcSbGipzl35TWOHa8CHQBsCukPhtPTzsqk9SRPA4sRkjcR1iCBUk4M8b9zEIycvczCeGYHtxFFmBHtMD3nneOHq3Q+L9583wgtXyvqZFx4jFvj6mRpwPBjp2EBZwfDsk8eYBXNFchz4skXr2ck4EHFDsrK22i2IYcXYVdlrqxNhOntvXpkk8Jd4g0kTa97evLqzP2ulOQiVarI+sT9oeFIUz3luklS1WMWUP71ab7DWd1VMlv8jBpFeLZaWLP9rAn8T9dCXDftI/QHLrkIQF0Oqxkkk1G58Lb0YElDDu6ixCAbZ6KXr8msyAXlpKF+XV6n9wkReS+IGoJ9LQ8YrVLesPJyufSFl0V9PhzK7Uf/l7QpV8CQXygY8xfW6AU9x2XDAU1y9/MAzXET9QLI/d/Zrud3jr+V+4gkuKX/j769sj/DnF9hfeOGFX8c/pL1HhdCaxmsAAAAASUVORK5CYII="/>
		</div>
</div>
	)
}

export default Head;