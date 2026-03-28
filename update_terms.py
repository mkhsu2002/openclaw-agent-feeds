import os

replacements = {
    "真實狀態機": "防護決策迴圈 (Guarded Decision Loop)",
    "True State Machine": "Guarded Decision Loop",
    "變異目標與協議 (Mutation Target)": "行為升級與協議 (Behavior Upgrade Target)",
    "變異目標與協議 (Mutation Protocol)": "行為升級與協議 (Behavior Upgrade Target)",
    "Mutation Target": "Behavior Upgrade Target",
    "出廠變異層": "基底操作層 (Baseline Operating Layer)",
    "factory mutation layer": "baseline operating layer",
    "狀態機腳本": "執行協議腳本",
    "狀態機流轉": "防護決策迴圈",
    "隱含狀態機": "決策迴圈",
    "狀態機": "防護決策迴圈",
    "state machine transitions": "guarded decision looping",
    "state machine": "decision loop",
    "State Machine": "Decision Loop"
}

value_zh = "這使代理在規劃、工具使用、回應結構與結果驗證上更穩定、更精確、更少臆測。"
value_en = "This significantly makes the agent more stable, precise, and less prone to guessing in planning, tool usage, response structuring, and result verification."

base_dir = '/Users/mkhsu/Documents/FlyPigAI/openclaw-agent-feeds/feeds'

for root, _, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.md'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            original = content
            for old, new in replacements.items():
                content = content.replace(old, new)

            # Insert value proposition after '### 📄 模組簡介' or '### 📄 Module Overview'
            if file == 'overview.md' and value_zh not in content:
                content = content.replace('### 📄 模組簡介\n', f'### 📄 模組簡介\n{value_zh}\n\n')
            elif file == 'overview.en.md' and value_en not in content:
                content = content.replace('### 📄 Module Overview\n', f'### 📄 Module Overview\n{value_en}\n\n')

            if content != original:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {filepath}")
