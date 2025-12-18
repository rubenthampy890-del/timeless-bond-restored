import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { format, addDays, isBefore, startOfToday } from "date-fns";
import { ArrowLeft, CalendarDays, Clock, Upload, Check, ChevronRight, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const timeSlots = [
  "10:00 AM",
  "11:30 AM",
  "2:00 PM",
  "3:30 PM",
  "5:00 PM",
];

const eventTypes = [
  "Traditional Wedding",
  "Destination Wedding",
  "Intimate Ceremony",
  "Engagement Celebration",
  "Pre-Wedding Events",
  "Other",
];

const budgetRanges = [
  "₹10L - ₹25L",
  "₹25L - ₹50L",
  "₹50L - ₹1Cr",
  "₹1Cr - ₹2Cr",
  "₹2Cr+",
  "Prefer to discuss",
];

const stylePreferences = [
  "Classic & Timeless",
  "Modern Minimalist",
  "Opulent & Grand",
  "Rustic & Natural",
  "Cultural & Traditional",
  "Bohemian & Free-spirited",
];

const BookConsultation = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    venuePreference: "",
    budgetRange: "",
    stylePreferences: [] as string[],
    vision: "",
    specialRequirements: "",
    howHeard: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStyleToggle = (style: string) => {
    setFormData(prev => ({
      ...prev,
      stylePreferences: prev.stylePreferences.includes(style)
        ? prev.stylePreferences.filter(s => s !== style)
        : [...prev.stylePreferences, style]
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).slice(0, 5 - uploadedFiles.length);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast.success("Your consultation has been scheduled. We'll send a confirmation shortly.");
    setIsSubmitting(false);
    navigate("/");
  };

  const canProceedStep1 = selectedDate && selectedTime;
  const canProceedStep2 = formData.firstName && formData.email && formData.phone && formData.eventType;
  const canProceedStep3 = formData.budgetRange;

  const steps = [
    { number: 1, title: "Schedule" },
    { number: 2, title: "Details" },
    { number: 3, title: "Vision" },
    { number: 4, title: "Confirm" },
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur-sm border-b border-charcoal/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-charcoal/70 hover:text-charcoal transition-colors font-body text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </button>
          
          <img src={logo} alt="Timeless Bond" className="h-10 sm:h-12" />
          
          <div className="w-20" />
        </div>
      </header>

      {/* Progress Steps */}
      <div className="bg-soft-white border-b border-charcoal/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div 
                    className={cn(
                      "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-body text-sm transition-all duration-300",
                      currentStep > step.number 
                        ? "bg-primary text-primary-foreground" 
                        : currentStep === step.number 
                          ? "bg-charcoal text-ivory" 
                          : "bg-charcoal/10 text-charcoal/40"
                    )}
                  >
                    {currentStep > step.number ? <Check className="w-4 h-4" /> : step.number}
                  </div>
                  <span className={cn(
                    "mt-2 font-body text-xs tracking-wide hidden sm:block",
                    currentStep >= step.number ? "text-charcoal" : "text-charcoal/40"
                  )}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={cn(
                    "w-12 sm:w-20 lg:w-32 h-px mx-2 sm:mx-4",
                    currentStep > step.number ? "bg-primary" : "bg-charcoal/20"
                  )} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        
        {/* Step 1: Schedule */}
        {currentStep === 1 && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <p className="text-primary font-body text-xs sm:text-sm tracking-luxury uppercase mb-3">Step One</p>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-charcoal mb-3">Choose Your Consultation Time</h1>
              <p className="font-body text-charcoal/60 max-w-lg mx-auto">Select a date and time that works best for you. Each consultation is 45-60 minutes.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Calendar */}
              <div className="bg-soft-white rounded-sm p-6 sm:p-8 border border-charcoal/10">
                <div className="flex items-center gap-2 mb-6">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-lg text-charcoal">Select Date</h3>
                </div>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => isBefore(date, startOfToday()) || date < addDays(new Date(), 2)}
                  className="rounded-md pointer-events-auto mx-auto"
                />
              </div>

              {/* Time Slots */}
              <div className="bg-soft-white rounded-sm p-6 sm:p-8 border border-charcoal/10">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-lg text-charcoal">Select Time</h3>
                </div>
                <p className="font-body text-sm text-charcoal/60 mb-4">
                  {selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : "Please select a date first"}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map(time => (
                    <button
                      key={time}
                      disabled={!selectedDate}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "py-3 px-4 rounded-sm font-body text-sm transition-all duration-300 border",
                        selectedTime === time 
                          ? "bg-charcoal text-ivory border-charcoal" 
                          : selectedDate
                            ? "bg-ivory text-charcoal border-charcoal/20 hover:border-charcoal/40"
                            : "bg-charcoal/5 text-charcoal/30 border-transparent cursor-not-allowed"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <Button 
                disabled={!canProceedStep1}
                onClick={() => setCurrentStep(2)}
                className="bg-charcoal text-ivory hover:bg-charcoal/90 px-8 py-6 font-body text-sm tracking-wide"
              >
                Continue <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Event Details */}
        {currentStep === 2 && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <p className="text-primary font-body text-xs sm:text-sm tracking-luxury uppercase mb-3">Step Two</p>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-charcoal mb-3">Tell Us About Your Celebration</h1>
              <p className="font-body text-charcoal/60 max-w-lg mx-auto">Share the essential details so we can prepare for your consultation.</p>
            </div>

            <div className="max-w-2xl mx-auto bg-soft-white rounded-sm p-6 sm:p-10 border border-charcoal/10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label className="font-body text-xs tracking-luxury uppercase text-charcoal/60 mb-2 block">First Name *</Label>
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-ivory border-charcoal/20 focus:border-charcoal"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <Label className="font-body text-xs tracking-luxury uppercase text-charcoal/60 mb-2 block">Last Name</Label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-ivory border-charcoal/20 focus:border-charcoal"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <Label className="font-body text-xs tracking-luxury uppercase text-charcoal/60 mb-2 block">Email Address *</Label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-ivory border-charcoal/20 focus:border-charcoal"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <Label className="font-body text-xs tracking-luxury uppercase text-charcoal/60 mb-2 block">Phone Number *</Label>
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-ivory border-charcoal/20 focus:border-charcoal"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="mt-8">
                <Label className="font-body text-xs tracking-luxury uppercase text-charcoal/60 mb-3 block">Event Type *</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {eventTypes.map(type => (
                    <button
                      key={type}
                      onClick={() => setFormData({ ...formData, eventType: type })}
                      className={cn(
                        "py-3 px-4 rounded-sm font-body text-sm transition-all duration-300 border text-left",
                        formData.eventType === type 
                          ? "bg-charcoal text-ivory border-charcoal" 
                          : "bg-ivory text-charcoal border-charcoal/20 hover:border-charcoal/40"
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <Label className="font-body text-xs tracking-luxury uppercase text-charcoal/60 mb-2 block">Expected Event Date</Label>
                  <Input 
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="bg-ivory border-charcoal/20 focus:border-charcoal"
                    placeholder="Month / Year"
                  />
                </div>
                <div>
                  <Label className="font-body text-xs tracking-luxury uppercase text-charcoal/60 mb-2 block">Estimated Guest Count</Label>
                  <Input 
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="bg-ivory border-charcoal/20 focus:border-charcoal"
                    placeholder="e.g., 100-200"
                  />
                </div>
              </div>

              <div className="mt-6">
                <Label className="font-body text-xs tracking-luxury uppercase text-charcoal/60 mb-2 block">Venue Preference</Label>
                <Input 
                  name="venuePreference"
                  value={formData.venuePreference}
                  onChange={handleInputChange}
                  className="bg-ivory border-charcoal/20 focus:border-charcoal"
                  placeholder="City, destination, or specific venue if known"
                />
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(1)}
                className="border-charcoal/20 text-charcoal hover:bg-charcoal/5 px-8 py-6"
              >
                Back
              </Button>
              <Button 
                disabled={!canProceedStep2}
                onClick={() => setCurrentStep(3)}
                className="bg-charcoal text-ivory hover:bg-charcoal/90 px-8 py-6 font-body text-sm tracking-wide"
              >
                Continue <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Vision & Style */}
        {currentStep === 3 && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <p className="text-primary font-body text-xs sm:text-sm tracking-luxury uppercase mb-3">Step Three</p>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-charcoal mb-3">Share Your Vision</h1>
              <p className="font-body text-charcoal/60 max-w-lg mx-auto">Help us understand your aesthetic preferences and dreams for the celebration.</p>
            </div>

            <div className="max-w-2xl mx-auto bg-soft-white rounded-sm p-6 sm:p-10 border border-charcoal/10">
              <div>
                <Label className="font-body text-xs tracking-luxury uppercase text-charcoal/60 mb-3 block">Budget Range *</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {budgetRanges.map(range => (
                    <button
                      key={range}
                      onClick={() => setFormData({ ...formData, budgetRange: range })}
                      className={cn(
                        "py-3 px-4 rounded-sm font-body text-sm transition-all duration-300 border text-center",
                        formData.budgetRange === range 
                          ? "bg-charcoal text-ivory border-charcoal" 
                          : "bg-ivory text-charcoal border-charcoal/20 hover:border-charcoal/40"
                      )}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Label className="font-body text-xs tracking-luxury uppercase text-charcoal/60 mb-3 block">Style Preferences (Select all that apply)</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {stylePreferences.map(style => (
                    <button
                      key={style}
                      onClick={() => handleStyleToggle(style)}
                      className={cn(
                        "py-3 px-4 rounded-sm font-body text-sm transition-all duration-300 border text-center",
                        formData.stylePreferences.includes(style) 
                          ? "bg-charcoal text-ivory border-charcoal" 
                          : "bg-ivory text-charcoal border-charcoal/20 hover:border-charcoal/40"
                      )}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Label className="font-body text-xs tracking-luxury uppercase text-charcoal/60 mb-2 block">Your Vision</Label>
                <Textarea 
                  name="vision"
                  value={formData.vision}
                  onChange={handleInputChange}
                  className="bg-ivory border-charcoal/20 focus:border-charcoal min-h-[120px]"
                  placeholder="Describe your dream celebration... What emotions do you want to evoke? Any specific themes, colors, or cultural elements?"
                />
              </div>

              <div className="mt-6">
                <Label className="font-body text-xs tracking-luxury uppercase text-charcoal/60 mb-2 block">Special Requirements</Label>
                <Textarea 
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  className="bg-ivory border-charcoal/20 focus:border-charcoal min-h-[80px]"
                  placeholder="Any dietary restrictions, accessibility needs, or other important considerations..."
                />
              </div>

              {/* Inspiration Upload */}
              <div className="mt-8">
                <Label className="font-body text-xs tracking-luxury uppercase text-charcoal/60 mb-3 block">Inspiration Images (Optional)</Label>
                <p className="font-body text-sm text-charcoal/50 mb-4">Upload up to 5 images that inspire your vision</p>
                
                <div className="border-2 border-dashed border-charcoal/20 rounded-sm p-6 text-center hover:border-charcoal/40 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                    disabled={uploadedFiles.length >= 5}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-charcoal/40 mx-auto mb-2" />
                    <p className="font-body text-sm text-charcoal/60">
                      {uploadedFiles.length >= 5 ? "Maximum files uploaded" : "Click to upload or drag and drop"}
                    </p>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center gap-2 bg-ivory px-3 py-2 rounded-sm border border-charcoal/10">
                        <span className="font-body text-xs text-charcoal/70 truncate max-w-[150px]">{file.name}</span>
                        <button onClick={() => removeFile(index)} className="text-charcoal/40 hover:text-charcoal">×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(2)}
                className="border-charcoal/20 text-charcoal hover:bg-charcoal/5 px-8 py-6"
              >
                Back
              </Button>
              <Button 
                disabled={!canProceedStep3}
                onClick={() => setCurrentStep(4)}
                className="bg-charcoal text-ivory hover:bg-charcoal/90 px-8 py-6 font-body text-sm tracking-wide"
              >
                Review & Confirm <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {currentStep === 4 && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <p className="text-primary font-body text-xs sm:text-sm tracking-luxury uppercase mb-3">Final Step</p>
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-charcoal mb-3">Review Your Consultation</h1>
              <p className="font-body text-charcoal/60 max-w-lg mx-auto">Please review your details before confirming your consultation.</p>
            </div>

            <div className="max-w-2xl mx-auto">
              {/* Appointment Summary */}
              <div className="bg-charcoal text-ivory rounded-sm p-6 sm:p-8 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-lg">Your Consultation</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-body text-xs tracking-luxury uppercase text-ivory/50 mb-1">Date</p>
                    <p className="font-body text-ivory">{selectedDate && format(selectedDate, "EEEE, MMMM d, yyyy")}</p>
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-luxury uppercase text-ivory/50 mb-1">Time</p>
                    <p className="font-body text-ivory">{selectedTime}</p>
                  </div>
                </div>
              </div>

              {/* Details Summary */}
              <div className="bg-soft-white rounded-sm p-6 sm:p-8 border border-charcoal/10 space-y-6">
                <div>
                  <h4 className="font-body text-xs tracking-luxury uppercase text-charcoal/50 mb-3">Personal Details</h4>
                  <p className="font-body text-charcoal">{formData.firstName} {formData.lastName}</p>
                  <p className="font-body text-charcoal/70">{formData.email}</p>
                  <p className="font-body text-charcoal/70">{formData.phone}</p>
                </div>

                <div className="border-t border-charcoal/10 pt-6">
                  <h4 className="font-body text-xs tracking-luxury uppercase text-charcoal/50 mb-3">Event Details</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="font-body text-xs text-charcoal/50">Event Type</p>
                      <p className="font-body text-charcoal">{formData.eventType}</p>
                    </div>
                    {formData.eventDate && (
                      <div>
                        <p className="font-body text-xs text-charcoal/50">Expected Date</p>
                        <p className="font-body text-charcoal">{formData.eventDate}</p>
                      </div>
                    )}
                    {formData.guestCount && (
                      <div>
                        <p className="font-body text-xs text-charcoal/50">Guest Count</p>
                        <p className="font-body text-charcoal">{formData.guestCount}</p>
                      </div>
                    )}
                    <div>
                      <p className="font-body text-xs text-charcoal/50">Budget Range</p>
                      <p className="font-body text-charcoal">{formData.budgetRange}</p>
                    </div>
                  </div>
                </div>

                {formData.stylePreferences.length > 0 && (
                  <div className="border-t border-charcoal/10 pt-6">
                    <h4 className="font-body text-xs tracking-luxury uppercase text-charcoal/50 mb-3">Style Preferences</h4>
                    <div className="flex flex-wrap gap-2">
                      {formData.stylePreferences.map(style => (
                        <span key={style} className="font-body text-sm bg-ivory px-3 py-1 rounded-sm border border-charcoal/10">
                          {style}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {formData.vision && (
                  <div className="border-t border-charcoal/10 pt-6">
                    <h4 className="font-body text-xs tracking-luxury uppercase text-charcoal/50 mb-3">Your Vision</h4>
                    <p className="font-body text-charcoal/80">{formData.vision}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button 
                variant="outline"
                onClick={() => setCurrentStep(3)}
                className="border-charcoal/20 text-charcoal hover:bg-charcoal/5 px-8 py-6"
              >
                Back
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 font-body text-sm tracking-wide"
              >
                {isSubmitting ? "Confirming..." : "Confirm Consultation"}
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default BookConsultation;