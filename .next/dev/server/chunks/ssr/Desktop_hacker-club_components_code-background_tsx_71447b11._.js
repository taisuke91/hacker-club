module.exports = [
"[project]/Desktop/hacker-club/components/code-background.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBackground",
    ()=>CodeBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hacker$2d$club$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/hacker-club/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hacker$2d$club$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/hacker-club/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function CodeBackground() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hacker$2d$club$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hacker$2d$club$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        // Set canvas size
        const updateSize = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        // Code snippets for background
        const codeSnippets = [
            "function hack() {",
            "const security = true;",
            'import { crypto } from "node:crypto";',
            "if (vulnerable) {",
            "exploit.execute();",
            "def decrypt(data):",
            "class Hacker:",
            "#!/bin/bash",
            "SELECT * FROM users;",
            "while(true) {",
            'console.log("pwned");',
            "async function attack() {",
            'const flag = "CTF{...}";',
            "sudo rm -rf /",
            "ssh root@target",
            "nmap -sV -p-",
            "0x4141414141414141",
            "buffer overflow",
            "__init__.py",
            "return payload;"
        ];
        const lines = [];
        // Create initial code lines
        for(let i = 0; i < 30; i++){
            lines.push({
                text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                speed: 0.1 + Math.random() * 0.3,
                opacity: 0.1 + Math.random() * 0.2
            });
        }
        let animationId;
        function animate() {
            if (!ctx || !canvas) return;
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.font = '14px "Geist Mono", monospace';
            lines.forEach((line)=>{
                ctx.fillStyle = `rgba(34, 211, 238, ${line.opacity})`;
                ctx.fillText(line.text, line.x, line.y);
                line.y += line.speed;
                if (line.y > canvas.height + 20) {
                    line.y = -20;
                    line.x = Math.random() * canvas.width;
                    line.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                }
            });
            animationId = requestAnimationFrame(animate);
        }
        animate();
        return ()=>{
            window.removeEventListener("resize", updateSize);
            cancelAnimationFrame(animationId);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$hacker$2d$club$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 pointer-events-none",
        style: {
            opacity: 0.4
        }
    }, void 0, false, {
        fileName: "[project]/Desktop/hacker-club/components/code-background.tsx",
        lineNumber: 102,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_hacker-club_components_code-background_tsx_71447b11._.js.map