import { useState } from "react";
import { motion } from "framer-motion";
import { FaFilePdf, FaFileWord, FaFileExcel, FaDownload, FaSearch } from "react-icons/fa";

const resources = [
  {
    id: 1,
    title: "Membership Application Form",
    description: "Complete this form to become a member of K-Unity SACCO",
    category: "Membership",
    type: "PDF",
    icon: FaFilePdf,
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    size: "245 KB"
  },
  {
    id: 2,
    title: "Loan Application Form",
    description: "Apply for various types of loans available to our members",
    category: "Loans",
    type: "PDF",
    icon: FaFilePdf,
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    size: "320 KB"
  },
  {
    id: 3,
    title: "Savings Account Opening Form",
    description: "Open a new savings account with competitive interest rates",
    category: "Savings",
    type: "Word",
    icon: FaFileWord,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    size: "180 KB"
  },
  {
    id: 4,
    title: "Member Update Form",
    description: "Update your personal information and contact details",
    category: "Membership",
    type: "PDF",
    icon: FaFilePdf,
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    size: "156 KB"
  },
  {
    id: 5,
    title: "Financial Statement Template",
    description: "Template for preparing your financial statements",
    category: "Finance",
    type: "Excel",
    icon: FaFileExcel,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    size: "428 KB"
  },
  {
    id: 6,
    title: "SACCO By-Laws",
    description: "Complete by-laws governing K-Unity SACCO operations",
    category: "Governance",
    type: "PDF",
    icon: FaFilePdf,
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    size: "1.2 MB"
  }
];

const categories = ["All", "Membership", "Loans", "Savings", "Finance", "Governance"];
const types = ["All", "PDF", "Word", "Excel"];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesType = selectedType === "All" || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16 pt-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400 mb-4">
            Resources & Forms
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Access all the forms, documents, and resources you need for your SACCO transactions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div className="flex gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${resource.color}`}>
                    <resource.icon className="text-2xl" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                    {resource.size}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-400">
                    {resource.category}
                  </span>
                  
                  <button className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                    <FaDownload className="text-xs" />
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-slate-600 dark:text-slate-400">
              No resources found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}