import { motion } from 'framer-motion';
import Typed from 'react-typed';
import {
    PageLayout,
    SkillContainer1,
    SkillContainer2,
} from '../Interface/ProgrammingSkill';
function ProgrammingSkill() {
    return (
        <PageLayout>
            <SkillContainer2>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
                >
                    Hard Skills🤓
                </motion.h1>
            </SkillContainer2>
            <SkillContainer1
                as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
            >
                <p>🔸HTML/CSS 🔸React 🔸Styled-Components</p>
                <p>🔸UI Prototype 🔸Wireframe 🔸Infograhphic</p>
                <p>🔸C# 🔸Window Form 🔸GMap 🔸.NET</p>
                <p>🔸Spreadsheet 🔸Figma 🔸Canva</p>
            </SkillContainer1>
            <SkillContainer2>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
                >
                    Soft Skills👻
                </motion.h1>
            </SkillContainer2>
            <SkillContainer1
                as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
            >
                <p>🔹Team Communication</p>
                <p>🔹Positive and growth attitude</p>
                <p>🔹Learn Unlearn Relearn</p>
                <p>🔹Communicate in English</p>
                <p>🔹Fall and get up fast</p>
            </SkillContainer1>
            <SkillContainer2>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
                >
                    Other Skills🎃
                </motion.h1>
            </SkillContainer2>
            <SkillContainer1
                as={motion.div}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}
            >
                <p>🔻Day Trading</p>
                <p>🔻Investing</p>
                <p>🔻Short-Medium term forex analysis</p>
            </SkillContainer1>
            <Typed
                strings={['🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🫐 🍈 🍒 🍑 🥭']}
                typeSpeed={30}
                backSpeed={30}
                loop={true}
            />
        </PageLayout>
    );
}
export default ProgrammingSkill;
