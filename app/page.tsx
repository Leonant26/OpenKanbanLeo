import Sidebar from "@/components/Sidebar";
import BoardHeader from "@/components/BoardHeader";

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      {/* 1. Sidebar (Fixed Left) */}
      <Sidebar />

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col h-full min-w-0">
        {/* 2.1 Board Header (Fixed Top) */}
        <BoardHeader />

        {/* 2.2 Main Canvas (Scrollable) */}
        <main className="flex-1 overflow-x-auto overflow-y-hidden bg-gray-50 p-6">
          <div className="h-full inline-flex items-start gap-6">
            {/* Placeholder for Kanban Columns */}
            
            {/* Example Column 1 */}
            <div className="w-80 flex-shrink-0 flex flex-col max-h-full bg-slate-100 rounded-2xl p-3">
              <div className="flex items-center justify-between px-2 mb-3">
                <h3 className="font-bold text-slate-700">To Do</h3>
                <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded-full">3</span>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-3">
                 {/* Placeholder Task Card */}
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:shadow-md transition-shadow">
                    <span className="text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-lg mb-2 inline-block">Design</span>
                    <h4 className="font-semibold text-slate-800 mb-2">Create new brand guidelines</h4>
                    <div className="flex items-center justify-between mt-3">
                       <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
                       </div>
                    </div>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-slate-800 mb-2">Research competitors</h4>
                 </div>
              </div>
            </div>

            {/* Example Column 2 */}
            <div className="w-80 flex-shrink-0 flex flex-col max-h-full bg-slate-100 rounded-2xl p-3">
              <div className="flex items-center justify-between px-2 mb-3">
                <h3 className="font-bold text-slate-700">In Progress</h3>
                <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded-full">1</span>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-3">
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:shadow-md transition-shadow">
                    <span className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded-lg mb-2 inline-block">Dev</span>
                    <h4 className="font-semibold text-slate-800 mb-2">Setup Next.js project</h4>
                 </div>
              </div>
            </div>

            {/* Example Column 3 */}
            <div className="w-80 flex-shrink-0 flex flex-col max-h-full bg-slate-100 rounded-2xl p-3">
               <div className="flex items-center justify-between px-2 mb-3">
                <h3 className="font-bold text-slate-700">Done</h3>
                <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded-full">5</span>
              </div>
            </div>

             {/* Add Column Button */}
             <div className="w-80 flex-shrink-0 h-12 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center text-slate-400 font-semibold hover:border-cyan-400 hover:text-cyan-500 hover:bg-cyan-50 transition-all cursor-pointer">
                + Add Column
             </div>

          </div>
        </main>
      </div>
    </div>
  );
}
