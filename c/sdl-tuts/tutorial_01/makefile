CFLAGS = -Wall -pedantic -Werror
LFLAGS = `sdl2-config --cflags --libs` -lSDL2
# OBJS   = init.o input.o main.o
PROG = tutorial01
CXX = g++

# top-level rule to create the program.
all: $(PROG)

# compiling other source files.
%.o: src/%.c /Library/Frameworks/SDL2\.framework/Headers/%.h src/%.h src/defs.h
	$(CXX) $(CFLAGS) -c $<

# linking the program.
$(PROG): $(OBJS)
	$(CXX) $(OBJS) -o $(PROG) $(LFLAGS)

# cleaning everything that can be automatically recreated with "make".
clean:
	rm $(PROG) *.o
