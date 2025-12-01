import React from "react";
import { motion } from "framer-motion";


const COLORS = {
highlight: "#F2BED1",
main: "#FDCEDF",
sub: "#F8E8EE",
text: "#333333",
bg: "#ffffff",
};


const reveal = {
hidden: { opacity: 0, y: 20 },
show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const Section = ({ id, className = "", children }: any) => (
<section
id={id}
className={`min-h-screen flex flex-col justify-center items-center px-6 scroll-snap-start ${className}`}
>
{children}
</section>
);


function Header() {
const [activeId, setActiveId] = React.useState("cover");


React.useEffect(() => {
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) setActiveId(entry.target.id);
});
},
{ threshold: 0.5 }
);


const sections = document.querySelectorAll("section");
sections.forEach((section) => observer.observe(section));
return () => observer.disconnect();
}, []);


const navItems = [
{ id: "cover", label: "Home" },
{ id: "problem", label: "Problem" },
{ id: "solution", label: "Solution" },
{ id: "how", label: "Flow" },
{ id: "features", label: "Features" },
{ id: "tech", label: "Tech" },
{ id: "team", label: "Team" },
{ id: "demo", label: "Demo" },
{ id: "roadmap", label: "Roadmap" },
{ id: "closing", label: "Closing" },
];


return (
<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 border-b border-pink-100">
<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
<a href="#cover" className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-pink-300" />
<span className="font-bold tracking-tight text-gray-700">MingleUp</span>
</a>


<nav className="hidden md:flex items-center gap-5">
{navItems.map((s) => (
<a
key={s.id}
href={`#${s.id}`}
className={`text-sm transition duration-200 border-b-2 pb-1 ${
activeId === s.id
? "text-pink-500 border-pink-400 font-semibold"
: "text-gray-700 border-transparent hover:text-pink-500"
}`}
>
{s.label}
</a>
))}
</nav>
</div>
</header>
);
}


const Footer = () => (
<footer className="py-6 border-t border-pink-100 text-center text-sm text-gray-500">
© {new Date().getFullYear()} MingleUp — AI가 만들어주는 새로운 만남의 시작
</footer>
);


export default function App() {
return (
<div
className="h-screen w-full overflow-y-scroll scroll-snap-y scroll-snap-mandatory"
style={{ background: COLORS.bg }}
>
<Header />

      {/* 표지 */}
      <Section id="cover">
        <motion.div initial="hidden" animate="show" variants={reveal} className="text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
            자연스러운 만남, <span className="text-pink-400">MingleUp</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            MingleUp은 AI 기반 솔로파티 매칭 플랫폼으로, 사용자의 성향과 MBTI, 관심사를 분석해
            가장 자연스럽고 어색하지 않은 만남을 만들어줍니다.
          </p>
          <p className="text-base text-gray-500 mb-6">
            “AI가 만들어주는 새로운 만남의 시작”이라는 슬로건처럼, 단순한 연결이 아닌 진짜 잘 맞는 사람을
            만나는 경험을 제공합니다.
          </p>
        </motion.div>
      </Section>

      {/* 문제점 */}
      <Section id="problem" className="bg-pink-50">
        <motion.div initial="hidden" whileInView="show" variants={reveal} className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">기존 매칭의 문제점</h2>
          <p className="text-gray-600 text-lg mb-4">
            기존 매칭 서비스는 “랜덤성과 어색함”이라는 근본적인 한계가 있습니다.
          </p>
          <ul className="text-gray-600 space-y-2 text-left">
            <li>• 대부분의 오프라인 파티나 소개팅 서비스는 우연성에 의존하고 있습니다.</li>
            <li>• 참가자의 성향, 대화 스타일, 가치관이 고려되지 않아 어색한 첫 만남이 많습니다.</li>
            <li>• 주최자는 참가자 승인, 관리 등으로 운영 피로도가 높습니다.</li>
          </ul>
          <p className="text-pink-400 font-semibold mt-6">“좋은 만남이 운이 아닌 데이터로 만들어질 수 있다.”</p>
        </motion.div>
      </Section>

      {/* 솔루션 */}
      <Section id="solution">
        <motion.div initial="hidden" whileInView="show" variants={reveal} className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">MingleUp의 솔루션</h2>
          <p className="text-gray-600 text-lg mb-4">
            MingleUp은 AI가 사람의 성향을 분석해 진짜 잘 맞는 사람을 자연스럽게 연결해주는 플랫폼입니다.
          </p>
          <ul className="text-gray-600 space-y-2 text-left">
            <li>• AI가 MBTI, 취향, 대화 패턴을 종합 분석해 최적의 조합을 추천합니다.</li>
            <li>• ChatGPT API를 활용한 AI 매칭 알고리즘으로 공정하고 효율적인 매칭을 제공합니다.</li>
            <li>• 주최자는 승인만 하면 매칭이 자동으로 진행되어 운영 효율이 향상됩니다.</li>
          </ul>
          <p className="text-pink-400 font-semibold mt-6">“AI가 감정과 데이터를 함께 읽을 수 있다면, 만남은 훨씬 자연스러워집니다.”</p>
        </motion.div>
      </Section>

      {/* 사용자 여정 */}
      <Section id="how" className="bg-pink-50">
        <motion.div initial="hidden" whileInView="show" variants={reveal} className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">사용자 여정</h2>
          <ol className="text-gray-600 text-lg space-y-2 text-left">
            <li>1️⃣ 카카오 로그인 및 회원가입 — 간편하게 시작</li>
            <li>2️⃣ 성향 입력 (MBTI, 취미, 관심사) — AI가 분석할 데이터 제공</li>
            <li>3️⃣ 파티 탐색 및 신청 — 관심 있는 주제 선택</li>
            <li>4️⃣ 호스트 승인 후 AI 매칭 실행</li>
            <li>5️⃣ 카카오톡으로 결과 알림</li>
            <li>6️⃣ 파티 종료 후 리뷰 작성 — 후기 기반 모델 개선</li>
          </ol>
          <p className="text-pink-400 font-semibold mt-6">“사용자는 단 3분이면 가입부터 매칭까지 완료할 수 있습니다.”</p>
        </motion.div>
      </Section>

      {/* 핵심 기능 */}
      <Section id="features">
        <motion.div initial="hidden" whileInView="show" variants={reveal} className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">핵심 기능</h2>
          <ul className="text-gray-600 text-lg space-y-2 text-left">
            <li>• ChatGPT API 기반 AI 매칭</li>
            <li>• 호스트의 파티 생성 및 참가자 승인 기능</li>
            <li>• 카카오톡 알림을 통한 매칭 결과 안내</li>
            <li>• AWS S3 기반 이미지 업로드 (Presigned URL)</li>
            <li>• 리뷰 시스템을 통한 AI 학습 피드백</li>
          </ul>
          <p className="text-pink-400 font-semibold mt-6">“AI + 파티 + 감성 UX가 결합된 새로운 형태의 소셜 플랫폼.”</p>
        </motion.div>
      </Section>

      {/* 기술 스택 */}
      <Section id="tech" className="bg-pink-50">
        <motion.div initial="hidden" whileInView="show" variants={reveal} className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">기술 스택 & 구조</h2>
          <ul className="text-gray-600 text-lg space-y-2 text-left">
            <li>• Frontend: React + TypeScript + TailwindCSS</li>
            <li>• Backend: Spring Boot + JPA</li>
            <li>• Infra: AWS (EC2, S3, RDS), Docker</li>
            <li>• AI Layer: ChatGPT API 기반 매칭 엔진</li>
            <li>• DevOps: GitHub Actions 자동 배포</li>
          </ul>
          <p className="text-gray-500 mt-4 text-sm">
            아키텍처: React → Spring Boot → AI API → DB → Kakao 알림톡
          </p>
        </motion.div>
      </Section>

      {/* 팀 소개 */}
      <Section id="team">
        <motion.div initial="hidden" whileInView="show" variants={reveal} className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">팀 소개</h2>
          <ul className="text-gray-600 text-lg space-y-2 text-left">
            <li>• 김태경 — 팀장 / 백엔드 리더: 서버 설계 및 매칭 로직</li>
            <li>• 손성열 — 프론트엔드 리더: React 구조 설계 및 UX</li>
            <li>• 홍지현 — 프론트엔드: 로그인 / 온보딩</li>
            <li>• 최광옥 — 프론트엔드: 파티 리스트 / 상세 페이지</li>
            <li>• 김동현 — 백엔드: DB, 매칭 API</li>
            <li>• 김현빈 — 인프라: AWS, Docker, 배포</li>
          </ul>
        </motion.div>
      </Section>

      {/* 시연 영상 */}
      <Section id="demo" className="bg-pink-50">
        <motion.div initial="hidden" whileInView="show" variants={reveal} className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">시연 영상</h2>
          <p className="text-gray-600 text-lg mb-6">
            로그인 → 성향 입력 → 파티 신청 → 매칭 결과까지의 흐름을 보여주는 시연 영상입니다.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-pink-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-pink-300 transition">YouTube 보기</a>
            <a href="#" className="border border-pink-200 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-pink-100 transition">GitHub 리포지토리</a>
          </div>
        </motion.div>
      </Section>

      {/* 로드맵 */}
      <Section id="roadmap">
        <motion.div initial="hidden" whileInView="show" variants={reveal} className="max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Roadmap</h2>
          <ul className="text-gray-600 text-lg space-y-2 text-left">
            <li>• 단기: MVP 검증 및 사용자 피드백 반영</li>
            <li>• 중기: 소개팅 / 취미 / 스터디 모임으로 확장</li>
            <li>• 장기: AI 기반 관계 매칭 플랫폼으로 발전</li>
          </ul>
          <p className="text-pink-400 font-semibold mt-6">“AI가 만들어주는 연결, 그리고 사람으로 완성되는 만남.”</p>
        </motion.div>
      </Section>

      {/* 마무리 */}
      <Section id="closing" className="bg-pink-50">
        <motion.div initial="hidden" whileInView="show" variants={reveal} className="text-center max-w-3xl">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            AI가 만들어주는 새로운 만남의 시작,<br /> <span className="text-pink-400">MingleUp</span>
          </h2>
          <p className="text-gray-600 mb-8">
            사람과 사람의 연결, 그것이 우리가 기술을 사용하는 이유입니다.<br />
            지금, 당신의 리듬에 맞춘 만남을 시작해보세요.
          </p>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
}
