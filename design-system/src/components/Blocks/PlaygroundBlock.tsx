import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
    Trash2,
    ChevronRight,
    FileText,
    Eye,
    X,
    ArrowUpDown,
    ArrowUp,
    ArrowDown,
    Plus,
    Calculator,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from '@/lib/utils';

interface MaterialRow {
    id: string;
    name: string;
    mass: string;
    linear: string;
    linearMass: string;
    circularP: number;
    linearP: number;
    isParent?: boolean;
    children?: MaterialRow[];
}

const MATERIAL_DATA: MaterialRow[] = [
    {
        id: 'MF1', name: 'Biomass', mass: '262, 030000', linear: '54, 60', linearMass: '262, 030000', circularP: 45.4, linearP: 54.6, isParent: true,
        children: [
            { id: 'MF 1.1', name: 'Crops', mass: '82, 120000', linear: '12, 40', linearMass: '82, 120000', circularP: 87.6, linearP: 12.4 },
            { id: 'MF 1.2', name: 'Crop residues', mass: '45, 300000', linear: '8, 20', linearMass: '45, 300000', circularP: 91.8, linearP: 8.2 },
            { id: 'MF 1.3', name: 'Wood', mass: '56, 400000', linear: '15, 60', linearMass: '56, 400000', circularP: 84.4, linearP: 15.6 },
            { id: 'MF 1.4', name: 'Wild fish', mass: '12, 000000', linear: '2, 10', linearMass: '12, 000000', circularP: 97.9, linearP: 2.1 },
            { id: 'MF 1.5', name: 'Live animals and animal products', mass: '38, 210000', linear: '10, 30', linearMass: '38, 210000', circularP: 89.7, linearP: 10.3 },
            { id: 'MF 1.6', name: 'Other', mass: '15, 000000', linear: '4, 00', linearMass: '15, 000000', circularP: 96.0, linearP: 4.0 },
            { id: 'MF 1.7', name: 'Product mainly from biomass', mass: '12, 000000', linear: '2, 00', linearMass: '12, 000000', circularP: 98.0, linearP: 2.0 },
        ]
    },
    {
        id: 'MF2', name: 'Metals', mass: '395, 770000', linear: '54, 10', linearMass: '262, 030000', circularP: 45.9, linearP: 54.1, isParent: true,
        children: [
            { id: 'MF 2.1', name: 'Iron and steel', mass: '210, 000000', linear: '30, 00', linearMass: '210, 000000', circularP: 70.0, linearP: 30.0 },
            { id: 'MF 2.2', name: 'Lead', mass: '45, 770000', linear: '10, 10', linearMass: '45, 770000', circularP: 89.9, linearP: 10.1 },
            { id: 'MF 2.3', name: 'Gold, silver, other precious metals', mass: '15, 000000', linear: '2, 00', linearMass: '15, 000000', circularP: 98.0, linearP: 2.0 },
            { id: 'MF 2.4', name: 'Uranium and thorium', mass: '25, 000000', linear: '5, 00', linearMass: '25, 000000', circularP: 95.0, linearP: 5.0 },
            { id: 'MF 2.5', name: 'Other metals', mass: '100, 000000', linear: '10, 00', linearMass: '100, 000000', circularP: 90.0, linearP: 10.0 },
        ]
    },
    {
        id: 'MF3', name: 'Non-metallic minerals', mass: '1025, 500000', linear: '30, 20', linearMass: '302, 030000', circularP: 69.8, linearP: 30.2, isParent: true,
        children: [
            { id: 'MF 3.1', name: 'Marble, granite, sandstone, porphyry, basalt, other ornamental or building stone', mass: '300, 000000', linear: '40, 00', linearMass: '300, 000000', circularP: 60.0, linearP: 40.0 },
            { id: 'MF 3.2', name: 'Chalk and dolomite', mass: '120, 000000', linear: '15, 00', linearMass: '120, 000000', circularP: 85.0, linearP: 15.0 },
            { id: 'MF 3.3', name: 'Slate', mass: '45, 000000', linear: '5, 00', linearMass: '45, 000000', circularP: 95.0, linearP: 5.0 },
            { id: 'MF 3.4', name: 'Chemical and fertilizer minerals', mass: '85, 000000', linear: '12, 00', linearMass: '85, 000000', circularP: 88.0, linearP: 12.0 },
            { id: 'MF 3.5', name: 'Salt', mass: '65, 000000', linear: '8, 00', linearMass: '65, 000000', circularP: 92.0, linearP: 8.0 },
            { id: 'MF 3.6', name: 'Limestone and gypsum', mass: '150, 000000', linear: '20, 00', linearMass: '150, 000000', circularP: 80.0, linearP: 20.0 },
            { id: 'MF 3.7', name: 'Clays and kaolin', mass: '95, 000000', linear: '10, 00', linearMass: '95, 000000', circularP: 90.0, linearP: 10.0 },
            { id: 'MF 3.8', name: 'Sand and gravel', mass: '110, 000000', linear: '12, 80', linearMass: '110, 000000', circularP: 87.2, linearP: 12.8 },
            { id: 'MF 3.9', name: 'Other non-metallic minerals', mass: '35, 500000', linear: '2, 00', linearMass: '35, 500000', circularP: 98.0, linearP: 2.0 },
            { id: 'MF 3.10', name: 'Excavated earthen materials', mass: '20, 000000', linear: '0, 00', linearMass: '20, 000000', circularP: 100.0, linearP: 0.0 },
        ]
    },
    {
        id: 'MF4', name: 'Fossil resources', mass: '395, 770000', linear: '54, 80', linearMass: '262, 030000', circularP: 45.2, linearP: 54.8, isParent: true,
        children: [
            { id: 'MF 4.1', name: 'Coal and other solid feedstock', mass: '150, 000000', linear: '20, 00', linearMass: '150, 000000', circularP: 80.0, linearP: 20.0 },
            { id: 'MF 4.2', name: 'Liquid and gaseous feedstock', mass: '210, 000000', linear: '30, 00', linearMass: '210, 000000', circularP: 70.0, linearP: 30.0 },
            { id: 'MF 4.3', name: 'Other products', mass: '35, 770000', linear: '4, 80', linearMass: '35, 770000', circularP: 95.2, linearP: 4.8 },
        ]
    },
    {
        id: 'MF5', name: 'Plastics', mass: '395, 770000', linear: '99, 12', linearMass: '395, 770000', circularP: 0.88, linearP: 99.12, isParent: true,
        children: [
            { id: 'MF 5.1', name: 'PET – polyethylene terephthalate', mass: '110, 000000', linear: '25, 00', linearMass: '110, 000000', circularP: 75.0, linearP: 25.0 },
            { id: 'MF 5.2', name: 'HDPE – high-density polyethylene', mass: '85, 000000', linear: '20, 00', linearMass: '85, 000000', circularP: 80.0, linearP: 20.0 },
            { id: 'MF 5.3', name: 'PVC – polyvinyl chloride', mass: '45, 000000', linear: '15, 00', linearMass: '45, 000000', circularP: 85.0, linearP: 15.0 },
            { id: 'MF 5.4', name: 'LDPE – low-density polyethylene', mass: '65, 000000', linear: '18, 00', linearMass: '65, 000000', circularP: 82.0, linearP: 18.0 },
            { id: 'MF 5.5', name: 'PP – polypropylene', mass: '55, 000000', linear: '12, 12', linearMass: '55, 000000', circularP: 87.88, linearP: 12.12 },
            { id: 'MF 5.6', name: 'PS – polystyrene', mass: '25, 770000', linear: '7, 00', linearMass: '25, 770000', circularP: 93.0, linearP: 7.0 },
            { id: 'MF 5.7', name: 'All other plastics', mass: '10, 000000', linear: '2, 00', linearMass: '10, 000000', circularP: 98.0, linearP: 2.0 },
        ]
    },
    {
        id: 'MF6', name: 'Critical raw minerals', mass: '740, 530000', linear: '19, 91', linearMass: '395, 770000', circularP: 80.09, linearP: 19.91, isParent: true,
        children: [
            { id: 'MF 6.1', name: 'Copper', mass: '85, 000000', linear: '15, 00', linearMass: '85, 000000', circularP: 85.0, linearP: 15.0 },
            { id: 'MF 6.2', name: 'Nickel', mass: '65, 000000', linear: '12, 00', linearMass: '65, 000000', circularP: 88.0, linearP: 12.0 },
            { id: 'MF 6.3', name: 'Zinc', mass: '75, 000000', linear: '18, 00', linearMass: '75, 000000', circularP: 82.0, linearP: 18.0 },
            { id: 'MF 6.4', name: 'Tin', mass: '45, 000000', linear: '10, 00', linearMass: '45, 000000', circularP: 90.0, linearP: 10.0 },
            { id: 'MF 6.5', name: 'Platinum group metals', mass: '12, 000000', linear: '1, 00', linearMass: '12, 000000', circularP: 99.0, linearP: 1.0 },
            { id: 'MF 6.6', name: 'Bauxite and aluminum', mass: '120, 000000', linear: '30, 00', linearMass: '120, 000000', circularP: 70.0, linearP: 30.0 },
            { id: 'MF 6.7', name: 'Cobalt', mass: '35, 000000', linear: '8, 00', linearMass: '35, 000000', circularP: 92.0, linearP: 8.0 },
            { id: 'MF 6.8', name: 'Rare earth elements', mass: '25, 000000', linear: '5, 00', linearMass: '25, 000000', circularP: 95.0, linearP: 5.0 },
            { id: 'MF 6.9', name: 'Manganese', mass: '55, 000000', linear: '12, 00', linearMass: '55, 000000', circularP: 88.0, linearP: 12.0 },
            { id: 'MF 6.10', name: 'Lithium', mass: '45, 000000', linear: '10, 00', linearMass: '45, 000000', circularP: 90.0, linearP: 10.0 },
            { id: 'MF 6.11', name: 'Phosphate rock', mass: '65, 000000', linear: '20, 00', linearMass: '65, 000000', circularP: 80.0, linearP: 20.0 },
            { id: 'MF 6.12', name: 'Niobium', mass: '15, 000000', linear: '3, 00', linearMass: '15, 000000', circularP: 97.0, linearP: 3.0 },
            { id: 'MF 6.13', name: 'Phosphorus', mass: '25, 000000', linear: '8, 00', linearMass: '25, 000000', circularP: 92.0, linearP: 8.0 },
            { id: 'MF 6.14', name: 'Magnesium', mass: '35, 530000', linear: '12, 12', linearMass: '35, 530000', circularP: 87.88, linearP: 12.12 },
            { id: 'MF 6.15', name: 'Natural graphite', mass: '25, 000000', linear: '5, 00', linearMass: '25, 000000', circularP: 95.0, linearP: 5.0 },
            { id: 'MF 6.16', name: 'Others', mass: '10, 000000', linear: '2, 00', linearMass: '10, 000000', circularP: 98.0, linearP: 2.0 },
        ]
    },
    {
        id: 'MF7', name: 'Hazardous materials', mass: '262, 030000', linear: '54, 80', linearMass: '395, 770000', circularP: 45.2, linearP: 54.8, isParent: false
    }
];

type SortDirection = 'asc' | 'desc' | null;
type SortKey = 'name' | 'mass' | 'linear' | 'linearMass';

const formatMass = (val: number) => {
    return val.toLocaleString('de-DE', { minimumFractionDigits: 6, maximumFractionDigits: 6 });
};

const formatPercent = (val: number) => {
    return val.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export const PlaygroundBlock = () => {
    const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});
    const [sortState, setSortState] = useState<Record<string, SortDirection>>({});
    const [activeSortKey, setActiveSortKey] = useState<SortKey | null>(null);
    const [improvements, setImprovements] = useState<Record<string, { mass?: number, linear?: number }>>({});
    const [editingRow, setEditingRow] = useState<MaterialRow | null>(null);
    const [editMass, setEditMass] = useState<string>("");
    const [editLinear, setEditLinear] = useState<string>("");
    const [focusField, setFocusField] = useState<'mass' | 'linear'>('mass');

    const massInputRef = useRef<HTMLInputElement>(null);
    const linearInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (editingRow) {
            setTimeout(() => {
                if (focusField === 'linear') {
                    linearInputRef.current?.focus();
                } else {
                    massInputRef.current?.focus();
                }
            }, 50);
        }
    }, [editingRow, focusField]);

    const toggleRow = (id: string) => {
        setExpandedRows(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleSort = (key: SortKey) => {
        const isCurrent = activeSortKey === key;
        const currentDir = sortState[key];
        const nextDir = isCurrent && currentDir === 'asc' ? 'desc' : 'asc';
        setSortState({ [key]: nextDir });
        setActiveSortKey(key);
    };

    const parseValue = (val: string) => {
        return parseFloat(val.replace(/\s/g, '').replace(',', '.'));
    };

    const handleSaveImprovement = () => {
        if (!editingRow) return;
        const mass = parseFloat(editMass);
        let linear = parseFloat(editLinear);
        if (!isNaN(mass) && !isNaN(linear)) {
            if (linear > 100) linear = 100;
            if (linear < 0) linear = 0;
            setImprovements(prev => ({ ...prev, [editingRow.id]: { mass, linear } }));
        }
        setEditingRow(null);
    };

    const processedData = useMemo(() => {
        let data = JSON.parse(JSON.stringify(MATERIAL_DATA)) as MaterialRow[];
        const processRow = (row: MaterialRow): any => {
            const modification = improvements[row.id];
            let isImproved = !!modification;
            let currentMass = modification?.mass !== undefined ? modification.mass : parseValue(row.mass);
            let currentLinear = modification?.linear !== undefined ? modification.linear : parseValue(row.linear);
            let childrenMass = 0;
            let childrenLinearMass = 0;
            let isChildrenChanged = false;
            let processedChildren = undefined;

            if (row.children) {
                processedChildren = row.children.map(child => processRow(child));
                if (!isImproved) {
                    if (processedChildren.some((c: any) => c.isImproved || c.isCalculated)) {
                        isChildrenChanged = true;
                        childrenMass = processedChildren.reduce((sum: number, c: any) => sum + c.displayMass, 0);
                        childrenLinearMass = processedChildren.reduce((sum: number, c: any) => sum + c.displayLinearMass, 0);
                        currentMass = childrenMass;
                        currentLinear = currentMass > 0 ? (childrenLinearMass / currentMass) * 100 : 0;
                    }
                }
            }

            const currentLinearMass = (currentMass * currentLinear) / 100;
            const currentCircular = 100 - currentLinear;
            const originalLinearVal = parseValue(row.linear);
            const originalLinearMassVal = (parseValue(row.mass) * originalLinearVal) / 100;
            const isBad = (isImproved || (!isImproved && isChildrenChanged)) && (
                (currentLinear > originalLinearVal + 0.001) ||
                (currentLinearMass > originalLinearMassVal + 0.001)
            );
            const originalMassVal = parseValue(row.mass);
            const isMassChanged = Math.abs(currentMass - originalMassVal) > 0.001;
            const isLinearChanged = Math.abs(currentLinear - originalLinearVal) > 0.001;
            const isLinearMassChanged = Math.abs(currentLinearMass - originalLinearMassVal) > 0.001;

            return {
                ...row,
                children: processedChildren,
                isImproved,
                isCalculated: !isImproved && isChildrenChanged,
                isBad,
                isMassChanged,
                isLinearChanged,
                isLinearMassChanged,
                originalLinearMass: originalLinearMassVal,
                displayMass: currentMass,
                displayLinear: currentLinear,
                displayLinearMass: currentLinearMass,
                displayCircular: currentCircular,
            };
        };

        const processed = data.map(processRow);
        const sortFn = (a: any, b: any) => {
            if (!activeSortKey || !sortState[activeSortKey]) return 0;
            const dir = sortState[activeSortKey];
            let valA = 0, valB = 0;
            switch (activeSortKey) {
                case 'name': return dir === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
                case 'mass': valA = a.displayMass; valB = b.displayMass; break;
                case 'linear': valA = a.displayLinear; valB = b.displayLinear; break;
                case 'linearMass': valA = a.displayLinearMass; valB = b.displayLinearMass; break;
            }
            if (valA < valB) return dir === 'asc' ? -1 : 1;
            if (valA > valB) return dir === 'asc' ? 1 : -1;
            return 0;
        };

        const sortRecursive = (items: any[]): any[] => {
            if (!items) return [];
            const sorted = [...items].sort(sortFn);
            return sorted.map(item => ({
                ...item,
                children: item.children ? sortRecursive(item.children) : undefined
            }));
        };
        return sortRecursive(processed);
    }, [improvements, activeSortKey, sortState]);

    const improvedCount = useMemo(() => {
        let count = 0;
        const countRecursive = (items: any[]) => {
            items.forEach(item => {
                if (item.isImproved && !item.isBad) count++;
                if (item.children) countRecursive(item.children);
            });
        };
        countRecursive(processedData);
        return count;
    }, [processedData]);

    const regressedCount = useMemo(() => {
        let count = 0;
        const countRecursive = (items: any[]) => {
            items.forEach(item => {
                if (item.isBad) count++;
                if (item.children) countRecursive(item.children);
            });
        };
        countRecursive(processedData);
        return count;
    }, [processedData]);

    const renderSortIcon = (key: SortKey) => {
        const direction = sortState[key];
        return (
            <div className={cn("ml-2 transition-opacity duration-200", direction ? "opacity-100 text-primary" : "opacity-0 group-hover:opacity-50")}>
                {direction === 'asc' ? <ArrowUp className="h-3 w-3" /> : direction === 'desc' ? <ArrowDown className="h-3 w-3" /> : <ArrowUpDown className="h-3 w-3" />}
            </div>
        );
    };

    return (
        <div className="dark min-h-screen -m-6 p-6 bg-[#0f111a] text-foreground transition-colors overflow-x-hidden">
            <div className="space-y-[var(--spacing-lg)] max-w-[1200px] mx-auto pb-24">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold tracking-tight text-white">Analyze and improve</h1>
                    <p className="text-muted-foreground">Analyze the circular performance of your flows, adjust their values, and explore improvement scenarios</p>
                </div>

                <Dialog open={!!editingRow} onOpenChange={(open) => !open && setEditingRow(null)}>
                    <DialogContent className="sm:max-w-[425px] bg-[#1a1d2e] border-white/10 text-white shadow-2xl rounded-2xl">
                        <DialogHeader>
                            <DialogTitle>Improve Values</DialogTitle>
                            <DialogDescription className="text-muted-foreground">Adjust the values for {editingRow?.name}.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="mass" className="text-right text-sm">Mass (kg)</Label>
                                <Input id="mass" ref={massInputRef} type="number" value={editMass} onChange={(e) => setEditMass(e.target.value)} className="col-span-3 bg-[#0f111a] border-white/10 text-white rounded-lg focus-visible:ring-primary" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="linear" className="text-right text-sm">Linear %</Label>
                                <Input id="linear" ref={linearInputRef} type="number" min="0" max="100" value={editLinear} onChange={(e) => setEditLinear(e.target.value)} className="col-span-3 bg-[#0f111a] border-white/10 text-white rounded-lg focus-visible:ring-primary" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setEditingRow(null)} className="border-white/10 text-white hover:bg-white/5 rounded-lg">Cancel</Button>
                            <Button onClick={handleSaveImprovement} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Card className="border border-white/5 shadow-2xl overflow-hidden bg-[#161926] rounded-3xl">
                    <CardContent className="p-8 space-y-8">
                        <div className="flex items-start justify-between">
                            <div className="space-y-4 w-full max-w-md">
                                <h3 className="text-lg font-bold uppercase tracking-wider text-white">INFLOWS</h3>
                                <div className="flex gap-2 items-center">
                                    <Select defaultValue="black-plastics">
                                        <SelectTrigger className="w-full h-12 rounded-xl border-white/10 bg-[#1e2235] text-white transition-colors focus-visible:ring-1 focus-visible:ring-ring">
                                            <SelectValue placeholder="Select inflow" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#1e2235] border-white/10 text-white">
                                            <SelectItem value="black-plastics">Eliminated black plastics</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl bg-[#1e2235] border-white/10 text-white shrink-0 hover:bg-white/5">
                                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                                    </Button>
                                </div>
                            </div>
                            <div className="w-72 border border-white/5 bg-[#1e2235]/50 rounded-xl p-4 space-y-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-white">Material category</span>
                                    <ChevronRight className="h-4 w-4 text-muted-foreground rotate-90" />
                                </div>
                                <p className="text-xs text-muted-foreground leading-snug">Grouping the flows in your assessments per material group</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex gap-4 flex-1">
                                <Select>
                                    <SelectTrigger className="w-full h-20 rounded-xl bg-[#1e2235] border-white/5 px-4 flex flex-col items-start justify-center gap-0.5 text-white">
                                        <span className="text-xs font-bold text-white uppercase tracking-tight">Product, packaging and waste</span>
                                        <span className="text-[10px] text-muted-foreground">Discover product and packaging hotpoints</span>
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#1e2235] border-white/10 text-white">
                                        <SelectItem value="1">Option 1</SelectItem>
                                    </SelectContent>
                                </Select>
                                <div className="w-full h-20 rounded-xl border border-white/5 px-4 flex flex-col items-start justify-center gap-0.5 bg-[#1e2235]/30 opacity-40 cursor-not-allowed">
                                    <span className="text-xs font-bold text-muted-foreground/80 uppercase tracking-tight">Suppliers</span>
                                    <span className="text-[10px] text-muted-foreground/40">Discover product and packaging hotpoints</span>
                                </div>
                                <Button variant="ghost" className="h-20 px-6 rounded-xl text-xs font-bold tracking-widest uppercase text-muted-foreground/60 hover:bg-white/5 transition-colors">ADVANCED FILTERS</Button>
                            </div>
                            <Button variant="outline" className="h-12 rounded-xl border-white/10 bg-[#1e2235] gap-2 font-bold text-white hover:bg-white/5 transition-colors">
                                <Eye className="h-4 w-4" /> ONLY CHANGES
                            </Button>
                        </div>

                        <div className="rounded-2xl border border-white/5 overflow-hidden bg-[#1a1d2e]/30">
                            <Table>
                                <TableHeader className="bg-white/5">
                                    <TableRow className="hover:bg-transparent border-white/5">
                                        <TableHead className="w-[30%]">
                                            <div className="group flex items-center cursor-pointer select-none text-[10px] h-10 font-bold uppercase text-muted-foreground/70" onClick={() => handleSort('name')}>
                                                Material category {renderSortIcon('name')}
                                            </div>
                                        </TableHead>
                                        <TableHead>
                                            <div className="group flex items-center cursor-pointer select-none text-[10px] h-10 font-bold uppercase text-muted-foreground/70" onClick={() => handleSort('mass')}>
                                                Total mass (kg) {renderSortIcon('mass')}
                                            </div>
                                        </TableHead>
                                        <TableHead>
                                            <div className="group flex items-center cursor-pointer select-none text-[10px] h-10 font-bold uppercase text-muted-foreground/70" onClick={() => handleSort('linear')}>
                                                Linear % {renderSortIcon('linear')}
                                            </div>
                                        </TableHead>
                                        <TableHead>
                                            <div className="group flex items-center cursor-pointer select-none text-[10px] h-10 font-bold uppercase text-muted-foreground/70" onClick={() => handleSort('linearMass')}>
                                                Linear mass (kg) {renderSortIcon('linearMass')}
                                            </div>
                                        </TableHead>
                                        <TableHead className="w-[300px]">
                                            <div className="flex gap-4 items-center justify-end mr-4">
                                                <div className="flex items-center gap-1.5 pt-4">
                                                    <div className="w-4 h-1.5 bg-primary rounded-full"></div>
                                                    <span className="text-[10px] font-bold text-muted-foreground/70 uppercase pt-0.5">Circular inflow</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 pt-4">
                                                    <div className="w-4 h-1.5 bg-white/10 rounded-full"></div>
                                                    <span className="text-[10px] font-bold text-muted-foreground/70 uppercase pt-0.5">Linear inflow</span>
                                                </div>
                                            </div>
                                        </TableHead>
                                        <TableHead className="w-12"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {processedData.map((row: any) => (
                                        <React.Fragment key={row.id}>
                                            <TableRow className={cn("group border-white/[0.03] h-16 transition-colors border-b relative", row.children && "cursor-pointer", row.isBad ? "bg-red-500/10 hover:bg-red-500/20" : row.isImproved ? "bg-emerald-500/10 hover:bg-emerald-500/20" : row.isCalculated ? "bg-purple-500/10 hover:bg-purple-500/20" : "hover:bg-white/[0.02]")} onClick={() => row.children && toggleRow(row.id)}>
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        {row.children ? <ChevronRight className={cn("h-4 w-4 text-primary transition-transform duration-200", expandedRows[row.id] && "rotate-90")} /> : <div className="w-4 h-4" />}
                                                        <Badge className="bg-white text-[#0f111a] hover:bg-white/90 rounded-sm border-none px-1.5 py-0.5 text-[10px] font-bold">{row.id}</Badge>
                                                        <span className="font-bold text-white/90">{row.name}</span>
                                                        {(row.isImproved || row.isCalculated) && (
                                                            <Badge className={cn("ml-2 h-5 w-5 group-hover:w-auto text-white border-none p-0 flex items-center justify-start overflow-hidden transition-all duration-300 shadow-md", row.isBad ? "bg-red-600" : row.isImproved ? "bg-emerald-600" : "bg-purple-600")}>
                                                                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                                                    {row.isImproved ? <Plus className={cn("h-3 w-3", row.isBad && "rotate-45")} /> : <Calculator className="h-3 w-3" />}
                                                                </div>
                                                                <span className="max-w-0 group-hover:max-w-[100px] opacity-0 group-hover:opacity-100 pr-0 group-hover:pr-2 whitespace-nowrap text-[8px] font-bold uppercase transition-all duration-300">
                                                                    {row.isBad ? "Regressed" : row.isImproved ? "Improved" : "Calculated"}
                                                                </span>
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </TableCell>
                                                <TableCell className="font-bold text-white group/cell relative">
                                                    <div className="flex flex-col">
                                                        {(row.isImproved || row.isCalculated) && row.isMassChanged && <span className="text-[10px] text-white/40 line-through mb-0.5">{row.mass}</span>}
                                                        <span>{formatMass(row.displayMass)}</span>
                                                    </div>
                                                    <div className="absolute left-4 -bottom-3 opacity-0 group-hover/cell:opacity-100 transition-opacity z-20">
                                                        <Button size="sm" className="h-6 text-[10px] bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg px-2 rounded-full font-bold" onClick={(e) => { e.stopPropagation(); setEditingRow(row); setEditMass(row.displayMass.toString()); setEditLinear(row.displayLinear.toString()); setFocusField('mass'); }}>Improve</Button>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="font-bold text-white group/cell relative">
                                                    <div className="flex flex-col">
                                                        {(row.isImproved || row.isCalculated) && row.isLinearChanged && <span className="text-[10px] text-white/40 line-through mb-0.5">{row.linear}</span>}
                                                        <span>{formatPercent(row.displayLinear)}%</span>
                                                    </div>
                                                    <div className="absolute left-4 -bottom-3 opacity-0 group-hover/cell:opacity-100 transition-opacity z-20">
                                                        <Button size="sm" className="h-6 text-[10px] bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg px-2 rounded-full font-bold" onClick={(e) => { e.stopPropagation(); setEditingRow(row); setEditMass(row.displayMass.toString()); setEditLinear(row.displayLinear.toString()); setFocusField('linear'); }}>Improve</Button>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="font-bold text-white">
                                                    <div className="flex flex-col">
                                                        {(row.isImproved || row.isCalculated) && row.isLinearMassChanged && <span className="text-[10px] text-white/40 mb-0.5">{formatMass(row.originalLinearMass || 0)}</span>}
                                                        <span>{formatMass(row.displayLinearMass)}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center justify-end gap-4 mr-4">
                                                        <div className="h-5 w-36 bg-white/5 rounded-full overflow-hidden p-0.5">
                                                            <div className="h-full bg-primary rounded-full transition-all duration-700" style={{ width: `${row.displayCircular}%` }}></div>
                                                        </div>
                                                        <div className="text-[10px] font-bold text-white/60 min-w-[70px] leading-tight flex flex-col gap-0.5">
                                                            <div className="flex justify-between">{formatPercent(row.displayCircular)}% <span className="text-[8px] font-normal opacity-40">C-I</span></div>
                                                            <div className="flex justify-between">{formatPercent(row.displayLinear)}% <span className="text-[8px] font-normal opacity-40">L-I</span></div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full border border-white/10 text-white/60 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all">
                                                        <FileText className="h-4 w-4" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                            {row.children && expandedRows[row.id] && row.children.map((child: any) => (
                                                <TableRow key={child.id} className={cn("group border-white/[0.01] h-14 bg-white/[0.01] hover:bg-white/[0.03] transition-colors relative", child.isBad && "bg-red-500/5 hover:bg-red-500/10", child.isImproved && !child.isBad && "bg-emerald-500/5 hover:bg-emerald-500/10")}>
                                                    <TableCell className="pl-12">
                                                        <div className="flex items-center gap-3">
                                                            <Badge className="bg-white/10 text-white/70 hover:bg-white/20 rounded-sm border-none px-1.5 py-0.5 text-[10px] font-bold">{child.id}</Badge>
                                                            <span className="text-sm text-white/60">{child.name}</span>
                                                            {child.isImproved && (
                                                                <Badge className={cn("ml-2 h-5 w-5 group-hover:w-auto text-white border-none p-0 flex items-center justify-start overflow-hidden transition-all duration-300 shadow-md", child.isBad ? "bg-red-600" : "bg-emerald-600")}>
                                                                    <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                                                        <Plus className={cn("h-3 w-3", child.isBad && "rotate-45")} />
                                                                    </div>
                                                                    <span className="max-w-0 group-hover:max-w-[100px] opacity-0 group-hover:opacity-100 pr-0 group-hover:pr-2 whitespace-nowrap text-[8px] font-bold uppercase transition-all duration-300">
                                                                        {child.isBad ? "Regressed" : "Improved"}
                                                                    </span>
                                                                </Badge>
                                                            )}
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="text-sm text-white/40 group/cell relative">
                                                        <div className="flex flex-col">
                                                            {child.isImproved && child.isMassChanged && <span className="text-[10px] text-white/20 line-through mb-0.5">{child.mass}</span>}
                                                            <span>{formatMass(child.displayMass)}</span>
                                                        </div>
                                                        {!row.isImproved && (
                                                            <div className="absolute left-4 -bottom-3 opacity-0 group-hover/cell:opacity-100 transition-opacity z-20">
                                                                <Button size="sm" className="h-5 text-[9px] bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg px-2 rounded-full font-bold" onClick={(e) => { e.stopPropagation(); setEditingRow(child); setEditMass(child.displayMass.toString()); setEditLinear(child.displayLinear.toString()); setFocusField('mass'); }}>Improve</Button>
                                                            </div>
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="text-sm text-white/40 group/cell relative">
                                                        <div className="flex flex-col">
                                                            {child.isImproved && child.isLinearChanged && <span className="text-[10px] text-white/20 line-through mb-0.5">{child.linear}</span>}
                                                            <span>{formatPercent(child.displayLinear)}%</span>
                                                        </div>
                                                        {!row.isImproved && (
                                                            <div className="absolute left-4 -bottom-3 opacity-0 group-hover/cell:opacity-100 transition-opacity z-20">
                                                                <Button size="sm" className="h-5 text-[9px] bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg px-2 rounded-full font-bold" onClick={(e) => { e.stopPropagation(); setEditingRow(child); setEditMass(child.displayMass.toString()); setEditLinear(child.displayLinear.toString()); setFocusField('linear'); }}>Improve</Button>
                                                            </div>
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="text-sm text-white/40">
                                                        <div className="flex flex-col">
                                                            {child.isImproved && child.isLinearMassChanged && <span className="text-[10px] text-white/20 mb-0.5">{formatMass(child.originalLinearMass || 0)}</span>}
                                                            <span>{formatMass(child.displayLinearMass)}</span>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center justify-end gap-4 mr-4">
                                                            <div className="h-4 w-32 bg-white/5 rounded-full overflow-hidden p-0.5">
                                                                <div className="h-full bg-primary/60 rounded-full transition-all duration-700" style={{ width: `${child.displayCircular}%` }}></div>
                                                            </div>
                                                            <div className="text-[10px] font-medium text-white/40 min-w-[70px] leading-tight flex flex-col gap-0.5">
                                                                <div className="flex justify-between">{formatPercent(child.displayCircular)}%</div>
                                                                <div className="flex justify-between">{formatPercent(child.displayLinear)}%</div>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full border border-white/5 text-white/40 hover:bg-primary/10 hover:text-primary transition-all">
                                                            <FileText className="h-3.5 w-3.5" />
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </React.Fragment>
                                    ))}
                                    <TableRow className="h-16 hover:bg-transparent border-none">
                                        <TableCell><span className="font-bold text-white/70 ml-7">Uncategorized</span></TableCell>
                                        <TableCell className="font-bold text-white/70">262,030000</TableCell>
                                        <TableCell className="font-bold text-white/70">54,80%</TableCell>
                                        <TableCell className="font-bold text-white/70">395,770000</TableCell>
                                        <TableCell>
                                            <div className="flex items-center justify-end gap-4 mr-4">
                                                <div className="h-5 w-36 bg-white/5 rounded-full overflow-hidden p-0.5">
                                                    <div className="h-full bg-primary rounded-full opacity-50" style={{ width: `50%` }}></div>
                                                </div>
                                                <div className="text-[10px] font-bold text-white/40 min-w-[70px] leading-tight flex flex-col gap-0.5">
                                                    <div className="flex justify-between">50.00% <span className="text-[8px] font-normal opacity-30">C-I</span></div>
                                                    <div className="flex justify-between">50.00% <span className="text-[8px] font-normal opacity-30">L-I</span></div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full border border-white/10 text-white/40 hover:bg-primary/20 hover:text-primary transition-all">
                                                <FileText className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>

                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-50">
                    <div className="bg-[#1a1d2e]/80 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex items-center gap-4 px-6 border-r border-white/10">
                                <div className="text-3xl font-bold text-emerald-500">{improvedCount}</div>
                                <div className="text-[10px] font-bold uppercase text-white leading-tight">IMPROVED<br />FLOWS</div>
                            </div>
                            <div className="flex items-center gap-4 px-6">
                                <div className="text-3xl font-bold text-red-500">{regressedCount}</div>
                                <div className="text-[10px] font-bold uppercase text-white leading-tight">REGRESSED<br />FLOWS</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button className="rounded-full bg-white/5 hover:bg-white/10 text-white border-white/10 h-11 px-8 font-bold text-sm transition-colors">SAVE CHANGES</Button>
                            <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground border-none h-11 px-8 font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-colors">CREATE NEW SCENARIO</Button>
                            <Button variant="outline" size="icon" className="h-11 w-11 rounded-full border-white/10 bg-[#1a1d2e] text-white hover:bg-white/5 transition-colors">
                                <X className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
