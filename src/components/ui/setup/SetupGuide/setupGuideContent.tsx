"use client";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Separator } from "@/components/ui/layout/separator";
import FullScreen from "@/components/ui/layout/fullScreen";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface SetupGuideContentProps {
  isFull: boolean;
  router: AppRouterInstance;
}

export function SetupGuideContent({
  isFull,
  router,
}: SetupGuideContentProps) {
  return (
    <div className="flex flex-col gap-4 justify-center w-fit p-4 text-neutral-200 select-none">
      {/* <LoopTextTittle /> */}
      <Separator />
      <section className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-4">
          <div
            className={cn(
              "space-y-3 landscape:space-y-0 landscape:space-x-3",
              "flex flex-col landscape:flex-row"
            )}
          >
            <div
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg transition-all flex-1 border-1 border-zinc-700",
                isFull ? "bg-zinc-900/50 text-zinc-400" : "bg-zinc-900/40"
              )}
            >
              <div className="flex-shrink-0">
                <div
                  className={cn(
                    "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                    isFull ? "border-green-500" : "border-zinc-500"
                  )}
                ></div>
              </div>
              <div className="flex-1">
                <p className="font-medium">全屏模式</p>
                <p className="text-sm text-zinc-400">获得最佳显示效果</p>
              </div>
              {!isFull && <FullScreen />}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isFull ? (
            <motion.button
              key="enter-button"
              onClick={() => router.push("/soulsign")}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
              transition={{
                duration: 0.4,
              }}
              className="w-full flex justify-center items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 
                        text-white py-3 px-6 rounded-lg font-medium 
                        transition-all duration-200 ease-out"
            >
              <p>开始使用</p>
              <ArrowRight size={16} color="white" />
            </motion.button>
          ) : null}
        </AnimatePresence>
      </section>
    </div>
  );
}
