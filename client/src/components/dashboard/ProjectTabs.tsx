import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomBadge } from "@/components/ui/custom-badge";
import { Plus } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with advanced features",
    status: "active",
    badgeVariant: "success" as const,
    badgeText: "Active",
    teamSize: 3,
  },
  {
    id: 2,
    title: "Mobile App",
    description: "Cross-platform mobile application development",
    status: "in-progress",
    badgeVariant: "warning" as const,
    badgeText: "In Progress",
    teamSize: 2,
  },
  {
    id: 3,
    title: "API Integration",
    description: "Third-party API integration and documentation",
    status: "blocked",
    badgeVariant: "error" as const,
    badgeText: "Blocked",
    teamSize: 2,
  },
];

export function ProjectTabs() {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Project Management</CardTitle>
          <Button className="bg-warning text-warning-foreground hover:bg-warning/90">
            <Plus className="w-4 h-4 mr-2" />
            New Project
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">Active Projects</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-foreground">{project.title}</h4>
                      <CustomBadge variant={project.badgeVariant}>
                        {project.badgeText}
                      </CustomBadge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {Array.from({ length: project.teamSize }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-6 h-6 rounded-full ${
                              i === 0 ? 'bg-primary' : 
                              i === 1 ? 'bg-success' : 
                              'bg-info'
                            } ${i > 0 ? '-ml-2' : ''}`}
                          />
                        ))}
                      </div>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed" className="mt-6">
            <div className="text-center py-8">
              <p className="text-muted-foreground">No completed projects yet</p>
            </div>
          </TabsContent>
          
          <TabsContent value="archived" className="mt-6">
            <div className="text-center py-8">
              <p className="text-muted-foreground">No archived projects</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
