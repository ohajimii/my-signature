// 特殊的 Vercel 配置
export const config = {
  runtime: 'edge',
};

// Vercel 会自动运行的函数
export default function handler(request) {
  // 1. 定义动态诗句
  const poeticMoods = {
    morning: "晨曦微露，万物初始",
    day: "暖阳正好，时光轻盈",
    dusk: "薄暮冥冥，静候星辰",
    night: "月色如水，梦境将启"
  };

  function getMood(hour) {
    if (hour >= 5 && hour < 9) return poeticMoods.morning;
    if (hour >= 9 && hour < 17) return poeticMoods.day;
    if (hour >= 17 && hour < 20) return poeticMoods.dusk;
    return poeticMoods.night;
  }

  // 2. 获取当前北京时间
  const now = new Date(new Date().getTime() + 8 * 3600 * 1000);
  const month = (now.getUTCMonth() + 1).toString();
  const day = now.getUTCDate().toString();
  const hours = now.getUTCHours();
  const minutes = now.getUTCMinutes().toString().padStart(2, '0');
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  const weekday = weekdays[now.getUTCDay()];
  
  const timeString = `${month}月${day}日 星期${weekday} ${hours.toString().padStart(2, '0')}:${minutes}`;
  const moodString = `✧ ${getMood(hours)} ✧`;

  // 3. 【重要】这是剥离了所有动画和滤镜的静态SVG代码
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="450" height="90">
<defs>
    <style>
      .mainText { font-family: 'Cormorant Garamond', 'Maple Mono', serif; font-style: italic; }
      .subText { font-family: 'Maple Mono', monospace; }
    </style>
    <linearGradient id="atriumSky" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDECFE"/>
        <stop offset="100%" stop-color="#E6F5FF"/>
    </linearGradient>
    <symbol id="timeHeart" viewBox="0 0 50 50">
        <g>
            <path d="M25,2 A23,23 0 0 1 48,25 A23,23 0 0 1 25,48 A23,23 0 0 1 2,25 A23,23 0 0 1 25,2 Z" fill="none" stroke="#D8BFD8" stroke-width="1.5" opacity="0.6"/>
            <path d="M25,10 L30,20 L25,30 L20,20 Z M25,10 L35,25 L25,30 L15,25 Z" fill="#FFE4E1" opacity="0.8"/>
            <circle cx="25" cy="25" r="8" fill="#FFF0F5"/>
        </g>
    </symbol>
</defs>
<rect x="5" y="15" width="440" height="60" rx="30" ry="30" fill="url(#atriumSky)"/>
<use href="#timeHeart" x="20" y="20" width="50" height="50"/>
<g transform="translate(85, 48)">
    <text class="mainText" font-size="20" fill="#6D28D9" opacity="0.9">${timeString}</text>
    <text class="subText" y="18" font-size="11" fill="#A78BFA" opacity="0.8">${moodString}</text>
</g>
</svg>
  `;

  // 4. 返回SVG图片
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=60, s-maxage=60',
    },
  });
}
