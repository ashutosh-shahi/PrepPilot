import { Link } from "react-router-dom";

import {
  Brain,
  FileText,
  Mic,
  ArrowRight,
} from "lucide-react";

const LandingPage = () => {
  return (

<div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

<div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
<div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

<div className="relative z-10">
<div className="max-w-6xl mx-auto px-8 pb-28">

<div className="flex flex-col items-center justify-center min-h-screen text-center">

<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2">

<Brain
size={18}
className="text-blue-500"
/>

<span className="text-slate-300 text-sm">

AI Powered Interview Preparation

</span>

</div>

<h1 className="text-7xl font-bold leading-tight max-w-5xl">

Interview Better

<br />


with

<span className="text-blue-500">

{" "}PrepPilot

</span>

</h1>

<p className="mt-8 max-w-3xl text-xl text-slate-400 leading-8">

Upload your resume, generate company-specific interview questions,
practice with AI, receive detailed feedback, and improve your interview performance.

</p>

<div className="mt-12 flex gap-5">

<Link

to="/dashboard"

className="flex items-center gap-2 bg-blue-600
hover:bg-blue-500
hover:shadow-lg
hover:shadow-blue-500/20
transition-all
duration-300 transition-all duration-300 px-8 py-4 rounded-xl font-semibold"

>

Start Preparing

<ArrowRight size={18}/>

</Link>

</div>


<div className="grid md:grid-cols-3 gap-6 mt-24 w-full">

<div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1">

<FileText
className="mb-5 text-blue-500 transition-transform duration-300 group-hover:scale-110"
size={30}
/>
<div className="mb-6 h-1 w-12 rounded-full bg-blue-500" />
<h3 className="text-xl font-semibold mb-3">

Resume-Aware Questions

</h3>

<p className="mt-4 text-slate-400 leading-7">

Generate interview questions tailored to your projects, skills and target company.

</p>

</div>

<div className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-900/20">

<Brain
className="mb-5 text-blue-500 transition-transform duration-300 group-hover:scale-110"
size={30}
/>
<div className="mb-6 h-1 w-12 rounded-full bg-blue-500" />
<h3 className="text-xl font-semibold mb-3">

AI Evaluation

</h3>

<p className="mt-4 text-slate-400 leading-7">

Receive scores, strengths, weaknesses and ideal answers after every response.

</p>

</div>

<div className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-900/20">

<Mic
className="mb-5 text-blue-500 transition-transform duration-300 group-hover:scale-110"
size={30}
/>
<div className="mb-6 h-1 w-12 rounded-full bg-blue-500" />

<h3 className="text-xl font-semibold mb-3">

Voice Interviews

</h3>

<p className="mt-4 text-slate-400 leading-7">

Practice interviews naturally using speech or text.

</p>

</div>

</div>

</div>

</div>

</div>

</div>

);
};

export default LandingPage;